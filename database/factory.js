'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

const Factory = use('Factory')


Factory.blueprint('App/Models/Role', (faker) => {
    return {
        denomination: faker.denomination()
    }
  })

Factory.blueprint('App/Models/User',  async (faker) => {
  return {
    firtname: faker.firtname(),
    lastname: faker.lastname(),
    country: faker.country(),
    city: faker.city(),
    age: faker.age(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    description: faker.description()
  }
})

Factory.blueprint('App/Models/Categorie', (faker) => {
    return {
        denomination: faker.denomination()
    }
  })

  Factory.blueprint('App/Models/Article', (faker) => {
    return {
      title: faker.title(),
      illustrationImg1: faker.illustrationImg1(),
      illustrationImg2: faker.illustrationImg2(),
      text: faker.text(),
      viewNumber: faker.viewNumber()
    }
  })




 


