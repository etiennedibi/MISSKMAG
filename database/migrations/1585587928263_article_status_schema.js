'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArticleStatusSchema extends Schema {
  up () {
    this.create('article_statuses', (table) => {
      table.increments()
      table.string('denomination').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('article_statuses')
  }
}

module.exports = ArticleStatusSchema
