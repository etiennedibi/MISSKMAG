'use strict'

/*
|--------------------------------------------------------------------------
| ArticleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ArticleSeeder {
  async run () {
    const articles = await Database.table('articles')
    console.log(articles)
  }
}

module.exports = ArticleSeeder
