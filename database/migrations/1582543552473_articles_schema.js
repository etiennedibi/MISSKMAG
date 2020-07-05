'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticlesSchema extends Schema {
  up () {
    this.create('articles', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('illustrationImg1')
      table.string('illustrationImg2')
      table.text('text').notNullable()
      table.integer('viewNumber')
      table.integer('categorie_id').unsigned()
      table.foreign('categorie_id').references('categories.id')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('articles')
  }
}

module.exports = ArticlesSchema
