'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddProfileImGtoUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('ProfilIMG').notNullable();
    })
  }

  down () {
    // this.table('add_profile_im_gto_users', (table) => {
    //   // reverse alternations
    // })
  }
}

module.exports = AddProfileImGtoUserSchema
