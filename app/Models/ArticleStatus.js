'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArticleStatus extends Model {

    article(){
        return this.hasMany('App/Models/Article')
      }
      
}

module.exports = ArticleStatus
