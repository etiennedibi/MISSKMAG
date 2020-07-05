'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categorie extends Model {
    article(){
        return this.hasMany('App/Models/Article')
    }
}

module.exports = Categorie
