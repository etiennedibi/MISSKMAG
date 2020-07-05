'use strict'

const Articles = use('App/Models/Article')
const Pubs = use('App/Models/Pub')
const Videos = use('App/Models/Video')
const SiteViewNumber = use('App/Models/SiteViewNumberSchema')

class HomeController {
   async show ({view, session}){

        //RECUPERARTION DES DERNIERS ARTICLES
        const recentArticlesWithoutPurify = await Articles.query().orderBy('id', 'desc').limit(4).fetch()
        const recentArticles = recentArticlesWithoutPurify.toJSON()


        //RECUPERARTION DES PUBLICITES
        const pubPostersWithoutPurify = await Pubs.query().orderBy('id', 'desc').where('spaceRequested', 'HomePage').limit(2).fetch()
        const pubPosters = pubPostersWithoutPurify.toJSON()


        
        //RECUPERARTION DES ARTICLES PAR CATEGORIE

        // 1- recupération des categories possédant au moins un article    2- parser les éléments en JSON
        const articleGroup =  await Articles.query().groupBy('categorie_id').with('categorie').fetch()
        const listCategorie = articleGroup.toJSON();

        // création du tableau devant contenir les différents tableaux d'articles classées par catégorie 
        const allDatas = new Array();
         for (let i = 0; i < listCategorie.length; i++) {
             const listArticleByCategorieWithoutPurify = await Articles.query().orderBy('id', 'desc').limit(4).where('categorie_id', listCategorie[i].categorie_id).with('user').fetch()
                const listArticleByCategorie = listArticleByCategorieWithoutPurify.toJSON();
                allDatas.push({name:listCategorie[i].categorie.denomination, body: listArticleByCategorie})
         }


        //RECUPERARTION DES VIDEOS PAR CATEGORIE
         const VideosWithoutPurify = await Videos.query().orderBy('id', 'desc').with('user').limit(4).fetch()
         const recentVideos = VideosWithoutPurify.toJSON()
         


        return view.render('ClientViews.layouts.home', { recentArticles, allDatas, pubPosters, listCategorie, recentVideos})
    }
}

module.exports = HomeController
