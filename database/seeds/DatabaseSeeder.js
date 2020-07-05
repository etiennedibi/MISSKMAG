'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
    const role = await Factory.model('App/Models/Role').createMany(2)
    const user = await Factory.model('App/Models/User').createMany(4)
    const categorie = await Factory.model('App/Models/Categorie').createMany(2)
    const article = await Factory.model('App/Models/Article').createMany(8)



    await role.user().save(user) 

    await categorie.article().save(article)

    await user.article().save(article)
  }
}

module.exports = DatabaseSeeder
