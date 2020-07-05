'use strict'
const SiteViewNumber = use('App/Models/SiteViewNumberSchema')
const Articles = use('App/Models/Article')
const Videos = use('App/Models/Video')

class DashboadController {

    async show ({view}){

         //REUPERATION DE LA DATE ACTUELLE
         const Today = new Date()
         const year = Today.getFullYear()
         const month = Today.getMonth() + 1
         const Topday = 1
         const Bottonday = 30
         const actualMonthTop = year + '-' + month + '-' + Topday
         const actualMonthBotton = year + '-' + month + '-' + Bottonday
 

        // NOMBRE DE VISITE DU SITE
        const SiteViewNumberWithOutPurify = await SiteViewNumber.query().whereBetween('created_at',[actualMonthTop,actualMonthBotton]).orderBy('id', 'desc').first()
        let siteViewNumber = 0
        if (SiteViewNumberWithOutPurify != null) {
            siteViewNumber = SiteViewNumberWithOutPurify.toJSON()
            siteViewNumber = siteViewNumber.viewNumber
            console.log(siteViewNumber);
            
        } 
        
        // NOMBRE D'ARTICLE PUBLIES
        const countArticle = await Articles.query().whereBetween('created_at',[actualMonthTop,actualMonthBotton]).count()
        const ArticleNumber = countArticle[0]['count(*)']
        
        // NOMBRE DE VIDEO PUBLIES
        const countVideo = await Videos.query().whereBetween('created_at',[actualMonthTop,actualMonthBotton]).count()
        const VideoNumber = countVideo[0]['count(*)']

        // VIDEO LA PLUS RECENT
        const VideoWithoutPurify = await Videos.query().orderBy('id', 'desc').first()
        const recentVideo = VideoWithoutPurify.toJSON()

        




        return view.render('AdminViews.layouts.Dashboard', {siteViewNumber, ArticleNumber, VideoNumber, recentVideo})
    }

}

module.exports = DashboadController
