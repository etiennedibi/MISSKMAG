'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PubSchema extends Schema {
  up () {
    this.create('pubs', (table) => {
      table.increments()
      table.string('applicant')
      table.string('posterURL')
      table.string('spaceRequested')
      table.timestamps()
    })
  }

  down () {
    this.drop('pubs')
  }
}

module.exports = PubSchema
