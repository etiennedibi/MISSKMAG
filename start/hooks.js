'use strict'

const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
    const View = use('Adonis/Src/View')


    View.global('paginationLinks', total => {
        return Array.from(new Array(total), (value, index) => {
            return index + 1
        })
    })
})