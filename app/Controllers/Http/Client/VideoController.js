'use strict'

const Articles = use('App/Models/Article')
const Videos = use('App/Models/Video')
const Pubs = use('App/Models/Pub')

class VideoController {
    async show ({view, request}){

        // 1- recupération des categories possédant au moins un article    2- parser les éléments en JSON
        const articleGroup =  await Articles.query().groupBy('categorie_id').with('categorie').fetch()
        const listCategorie = articleGroup.toJSON();



        //RECUPERARTION DE L'ARTICLES  2- Article le plus récent
        const VideosWithoutPurify = await Videos.query().orderBy('id', 'desc').with('user').paginate(Number(request.input('page', 1)), 10);
        const AllVideos = VideosWithoutPurify.toJSON();
        
        const LastVideo = AllVideos.data[0]


        //RECUPERARTION DES PUBLICITES
        const pubPostersWithoutPurify = await Pubs.query().orderBy('id', 'desc').where('spaceRequested', 'VideoPage').limit(2).fetch()
        const pubPosters = pubPostersWithoutPurify.toJSON()




        return view.render('ClientViews.layouts.video', {AllVideos, LastVideo, listCategorie, pubPosters})
    }
}

module.exports = VideoController
