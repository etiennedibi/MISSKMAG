'use strict'

//const categories = use('App/Models/Categorie')
const Articles = use('App/Models/Article')
const Pubs = use('App/Models/Pub')

class CategorieController {
    async show ({params, view, request}){

        // 1- recupération des categories possédant au moins un article    2- parser les éléments en JSON
        const articleGroup =  await Articles.query().groupBy('categorie_id').with('categorie').fetch()
        const listCategorie = articleGroup.toJSON();

        //RECUPERARTION DE LA CATEGORIE
        // const ThecategorieWithoutPurify = await categories.query().where('id', params.id).fetch();
        // const Thecategorie = ThecategorieWithoutPurify.toJSON()
    

        //RECUPERARTION DE L'ARTICLES  2- Article le plus récent
        const AriclesWithoutPurify = await Articles.query().orderBy('id', 'desc')
                    .where('categorie_id', params.id)
                    .with('categorie').with('user')
                    .paginate(Number(request.input('page', 1)), 8);

        const AllArticles = AriclesWithoutPurify.toJSON();
        console.log(AllArticles);
        
        const LasttArticle = AllArticles.data[0]
     
        //RECUPERARTION DES PUBLICITES
        const pubPostersWithoutPurify = await Pubs.query().orderBy('id', 'desc').where('spaceRequested', 'CategoriePage').limit(2).fetch()
        const pubPosters = pubPostersWithoutPurify.toJSON()
        
        
        return view.render('ClientViews.layouts.categorie', {AllArticles, LasttArticle, pubPosters, listCategorie})
    }
}

module.exports = CategorieController
