'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddPosterImGtoVideoSchema extends Schema {
  up () {
    this.table('videos', (table) => {
      table.string('PosterImG').notNullable();
    })
  }

  down () {
    // this.table('add_poster_im_gto_videos', (table) => {
    //   // reverse alternations
    // })
  }
}

module.exports = AddPosterImGtoVideoSchema
