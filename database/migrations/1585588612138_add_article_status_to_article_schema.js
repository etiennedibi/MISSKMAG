'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddArticleStatusToArticleSchema extends Schema {
  up () {
    this.table('add_article_status_to_articles', (table) => {
      // alter table
    })
  }

  down () {
    // this.table('add_article_status_to_articles', (table) => {
    //   // reverse alternations
    // })
  }
}

module.exports = AddArticleStatusToArticleSchema
