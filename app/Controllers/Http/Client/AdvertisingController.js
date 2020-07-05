'use strict'

const Articles = use('App/Models/Article')

class AdvertisingController {
    async show ({view}){

        // 1- recupération des categories possédant au moins un article    2- parser les éléments en JSON
        const articleGroup =  await Articles.query().groupBy('categorie_id').with('categorie').fetch()
        const listCategorie = articleGroup.toJSON();


        
        return view.render('ClientViews.layouts.Advertising', {listCategorie})
    }
}

module.exports = AdvertisingController
