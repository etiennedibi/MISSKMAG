'use strict'

/*
|--------------------------------------------------------------------------
| CategorieSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CategorieSeeder {
  async run () {
    const Categories = await Database.table('categories')
    console.log(Categories)
  }
}

module.exports = CategorieSeeder
