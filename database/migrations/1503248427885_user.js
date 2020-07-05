'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('firtname', 80).notNullable()
      table.string('lastname').notNullable()
      table.string('country').notNullable()
      table.string('city').notNullable()
      table.integer('age').notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.text('description').notNullable()
      table.integer('role_id').unsigned()
      table.foreign('role_id').references('roles.id')
      table.timestamps()
    })

  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
