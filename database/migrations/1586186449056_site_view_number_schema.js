'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SiteViewNumberSchema extends Schema {
  up () {
    this.create('site_view_numbers', (table) => {
      table.increments()
      table.integer('viewNumber')
      table.timestamps()
    })
  }

  down () {
    this.drop('site_view_numbers')
  }
}

module.exports = SiteViewNumberSchema
