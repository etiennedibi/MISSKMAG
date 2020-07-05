'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Article extends Model {
    user(){
        return this.belongsTo('App/Models/User')
    }

    categorie(){
        return this.belongsTo('App/Models/Categorie')
    }

    status(){
        return this.belongsTo('App/Models/ArticleStatus')
    }
}

module.exports = Article
