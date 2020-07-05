'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const SiteViewNumber = use('App/Models/SiteViewNumberSchema')



class VisitorIncrementation {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, session }, next) {
    await next()

    //REUPERATION DE LA DATE ACTUELLE
    const vToday = new Date()
    const vyear = vToday.getFullYear()
    const vmonth = vToday.getMonth() + 1
    const vTopday = 1
    const vBottonday = 30
    const vactualMonthTop = vyear + '-' + vmonth + '-' + vTopday
    const vactualMonthBotton = vyear + '-' + vmonth + '-' + vBottonday

    if (!session.get('visitor')) {
      let ViewNumberUpdate = await SiteViewNumber.query().whereBetween('created_at',[vactualMonthTop,vactualMonthBotton]).orderBy('id', 'desc').first()
      
      if (ViewNumberUpdate == null) {

        const siteViewNumber = new SiteViewNumber()
        await siteViewNumber.save()

        session.put('visitor','visitor' + 1)
        console.log('CREATION DU NOUVEAU MOIS ... ça fonctionne !!!');
        
      } else {
        
        const purifyViiewNumber = ViewNumberUpdate.toJSON()
        ViewNumberUpdate.viewNumber = purifyViiewNumber.viewNumber + 1
        await ViewNumberUpdate.save()
        session.put('visitor','visitor' + purifyViiewNumber.viewNumber)
        console.log('ça fonctionne !!!' + purifyViiewNumber.viewNumber + 1);

      }
      




      // if (purifyViiewNumber.created_at < vactualMonthTop) {
      //   SiteViewNumber.viewNumber = 1

      //   const siteViewNumber = new SiteViewNumber()
      //   await siteViewNumber.save()

      //   session.put('visitor','visitor' + 1)
      //   console.log('CREATION DU NOUVEAU MOIS ... ça fonctionne !!!');

      // } else {

      //   ViewNumberUpdate.viewNumber = purifyViiewNumber.viewNumber + 1
      //   await ViewNumberUpdate.save()
      //   session.put('visitor','visitor' + purifyViiewNumber.viewNumber)
      //   console.log('ça fonctionne !!!' + purifyViiewNumber.viewNumber + 1);     
      // }

      // ViewNumberUpdate.viewNumber = purifyViiewNumber.viewNumber + 1
      // await ViewNumberUpdate.save()

      // session.put('visitor','visitor' + purifyViiewNumber.viewNumber)
      // console.log('ça fonctionne !!!' + purifyViiewNumber.viewNumber + 1);
  }

    
  }
}

module.exports = VisitorIncrementation
