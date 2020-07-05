'use strict'

const { validateAll } = use('Validator')
const Videos = use('App/Models/Video')
const Helpers = use('Helpers')

class VideoController {


    async show ({view}){
        
        const allVideosWithOutPurify = await Videos.query().with('user').fetch()
        const allVideos = allVideosWithOutPurify.toJSON()
        
        return view.render('AdminViews.layouts.Video', {allVideos})
    }














    async addVideo ({request, response, session}){
        
        const videoData = request.all()

        //FORM VALIDATION  
        videoData.PosterImG = request.file('PosterImG')
        
        const rules = {
            title: 'required',
            link: 'required',
            user_id:'required',
            PosterImG: 'required|file|file_ext:jpg,png,jpeg,JPG,PNG|file_size:2mb|file_types:image'
        }
        
        const validation = await validateAll(videoData, rules)

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            session.flash({ AddFail: 'Failed to add video' })

            return response.redirect('back')
        }
        
        
        //UPLOAD POSTER_IMG RENAME AND MOVED  
        const PosterIMG = videoData.PosterImG
        
        const fileName = `${new Date().getTime()}.${PosterIMG.subtype}`

        await PosterIMG.move(Helpers.publicPath('uploads/videoPosterIMG'), {
            name: fileName
        })
        
        if (!PosterIMG.moved()) {
            session.flash({ notification:{
                    type:danger,
                    message: PosterIMG.error().message
                } 
            })
            return response.redirect('back')
        }


       // ADD NEW VIDEO TO THE DATABASE

       videoData.PosterIMG = `uploads/videoPosterIMG/${fileName}`
        
        const video = new Videos()

        video.title = videoData.title
        video.link = videoData.link
        video.user_id = videoData.user_id
        video.PosterImG = videoData.PosterIMG

        await video.save()

        session.flash({ successAdd: 'Video successfully added' })
        return response.redirect('back')
    }



}

module.exports = VideoController
