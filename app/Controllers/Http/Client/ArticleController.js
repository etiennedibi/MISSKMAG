'use strict'

const Articles = use('App/Models/Article')
const Pubs = use('App/Models/Pub')

class ArticleController {
    async show ({params, view}){

        // 1- recupération des categories possédant au moins un article    2- parser les éléments en JSON
        const articleGroup =  await Articles.query().groupBy('categorie_id').with('categorie').fetch()
        const listCategorie = articleGroup.toJSON();

        //RECUPERARTION DE L'ARTICLES
        const AricleWithoutPurify = await Articles.query().where('id', params.id).with('categorie').with('user').first();
        const Article = AricleWithoutPurify.toJSON();
     
        //RECUPERARTION DES PUBLICITES
        const pubPostersWithoutPurify = await Pubs.query().orderBy('id', 'desc').where('spaceRequested', 'ArticleViewerPage').limit(2).fetch()
        const pubPosters = pubPostersWithoutPurify.toJSON()


        //INCREMENTATION DU NOMBRE DE VUE
        let AticleToUpdate = await Articles.findBy('id', params.id)
        AticleToUpdate.viewNumber = Article.viewNumber + 1
        await AticleToUpdate.save()


        return view.render('ClientViews.layouts.article', {Article, pubPosters, listCategorie})
    }
}

module.exports = ArticleController
