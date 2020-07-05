'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorieSchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('denomination').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorieSchema
