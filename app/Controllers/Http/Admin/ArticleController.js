'use strict'

const { validateAll } = use('Validator')
//const Users = use('App/Models/User')
const Articles = use('App/Models/Article')
const Categories = use('App/Models/Categorie')
const Helpers = use('Helpers')



class ArticleController {


    
    async show ({view, auth}){

        //REUPERATION DE LA DATE ACTUELLE
        const Today = new Date()
        const year = Today.getFullYear()
        const month = Today.getMonth() + 1
        const Topday = 1
        const Bottonday = 30
        const actualMonthTop = year + '-' + month + '-' + Topday
        const actualMonthBotton = year + '-' + month + '-' + Bottonday


        // RECUPERARTION DE TOUTES LES CATEGORIE
        const categoriesWithOutPurify =  await Categories.query().fetch()
        const categories = categoriesWithOutPurify.toJSON()
        
        // RECUPERARTION DES ARTICLES
        const AllArticlesWithOutPurify = await Articles.query().with('user').with('categorie').fetch()
        const AllArticles = AllArticlesWithOutPurify.toJSON()

        // RECUPERARTION DES ARTICLES POUR ADMIN AUTEUR
        const AllAuthorArticlesWithOutPurify = await Articles.query().where('user_id', auth.user.id).with('categorie').fetch()
        const AllAuthorArticles = AllAuthorArticlesWithOutPurify.toJSON()
        // recuperation du plus grand nombre de vu d'article
        const bestAuthorArticleViewNumberNotPurified = await Articles.query().whereBetween('created_at',[actualMonthTop,actualMonthBotton]).max('viewNumber as bestScore').where('user_id', auth.user.id)
        const bestAuthorArticleViewNumber = bestAuthorArticleViewNumberNotPurified[0].bestScore
        // recuperation du plus grand nombre de vu d'article
        const  bestAuthorArticleWithOutPurify = await Articles.query().where('viewNumber', bestAuthorArticleViewNumber).where('user_id', auth.user.id).with('user').fetch()
        const bestAuthorArticle = bestAuthorArticleWithOutPurify.toJSON()
        

         // ARTICLE LE PLUS LU
         // recuperation du plus grand nombre de vu d'article
        const bestArticleViewNumberNotPurified = await Articles.query().max('viewNumber as bestScore').whereBetween('created_at',[actualMonthTop,actualMonthBotton])
        const bestArticleViewNumber = bestArticleViewNumberNotPurified[0].bestScore
         // recuperation de l'article le plus Lu
        const  bestArticleWithOutPurify = await Articles.query().where('viewNumber', bestArticleViewNumber).with('user').fetch()
        const bestArticle = bestArticleWithOutPurify.toJSON()
        

        
         if (auth.user.role_id == 2) {   
            return view.render('AdminViews.layouts.Articles', {categories, AllAuthorArticles, bestAuthorArticle})
         }

        return view.render('AdminViews.layouts.Articles', {categories, AllArticles, bestArticle})
    }





    async showArticle({view, params}){

        //RECUPERARTION DE L'ARTICLES
        const AricleWithoutPurify = await Articles.query().where('id', params.id).with('categorie').with('user').first();
        const Article = AricleWithoutPurify.toJSON();

        return view.render('AdminViews.layouts.ArticleView', {Article})
    }





    async addCategorie({request, response, session}){

        const categoryData = request.all()

        const CategoryVaidation = await validateAll(categoryData, {denomination: 'required|unique:categories,denomination'})

        if (CategoryVaidation.fails()) {
            session.flash({ AddCategorieFail: 'Failed to create category' })
            return response.redirect('back')
        }

        const {_csrf, ...rest} = categoryData

        const Categorie = await Categories.create(rest)
        session.flash({ AddCategoriesuccess: 'Category successfully created' })
        return response.redirect('back')
        
    }
    
    






    async addArticle({ request, response, auth, session }){

        const articleData = request.all()
        
        /**IMAGES VALIDATION**/

        // verification des importations de fichier
        const imgList = new Array(request.file('illustrationImg1'), request.file('illustrationImg2'))  
        if (imgList[0] == null  &&  imgList[1] == null) {
            session.flash({ notification: 'you must upload at last one image'})
            session.flash({ AddArticleFail: 'Failed to create article' })
            return response.redirect('back')
        }
                                   
        // verification du type de fichier  et Deplacement du fichier                 
        for (let i = 0; i < imgList.length; i++) {
            if (imgList[i] == null) {continue}
            // verification
            if (imgList[i].type != 'image') {
                session.flash({ notification: 'You can only upload image file'})
                session.flash({ AddArticleFail: 'Failed to create article' })
                return response.redirect('back')
            }
            // else if (imgList[i].subtype != 'jpeg'  || imgList[i].subtype != 'png'){
            //     session.flash({ notification: 'The type of image must be : jpg, png, or some variante of them'})
            //     session.flash({ AddArticleFail: 'Failed to create article' })
            //     return response.redirect('back')
            // }
            // Deplacement 
            let fileName = `${new Date().getTime()}.${imgList[i].subtype}`
            await imgList[i].move(Helpers.publicPath('uploads/articleIMG'), { name: fileName })
            
            if (!imgList[i].moved()) {
                session.flash({ notification: imgList[i].error().message})
                session.flash({ AddArticleFail: 'Failed to create article' })
                return response.redirect('back')
            }

            imgList[i] = `uploads/articleIMG/${fileName}`
    
        }

        /**VALIDATION DES AUTRES CHAMPS DU FORMULAIRE**/
        
         const rules = {
             title: 'required',
             text: 'required',
             categorie_id:'required',
             user_id: 'required'
         }
         
         const ArticleValidation = await validateAll(articleData, rules)

         if (ArticleValidation.fails()) {
            session.withErrors(ArticleValidation.messages()).flashExcept(['password'])
            session.flash({ AddArticleFail: 'Failed to create article' })

            return response.redirect('back')
        }

        /**ENREGISTREMENT DES DONNEES**/

        const article = new Articles()

        article.title = articleData.title
        article.text = articleData.text
        article.categorie_id = articleData.categorie_id
        article.user_id = articleData.user_id
        article.illustrationImg1 = imgList[0]
        article.illustrationImg2 = imgList[1]

        await article.save()

        session.flash({ ArticlesuccessAdd: 'Article successfully added' })
        return response.redirect('back')
    }






    async deletedArticle ({request, response, session, params}){

        const article = await Articles.find(params.id)
        await article.delete()

        session.flash({ ArticlesuccessDeleted: 'Article successfully Deleted' })
        return response.redirect('back')
    }










}

module.exports = ArticleController
