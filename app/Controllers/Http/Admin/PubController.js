'use strict'

const { validateAll } = use('Validator')
const Pubs = use('App/Models/Pub')
const Helpers = use('Helpers')



class PubController {

    async show ({view}){
        
        const pubsWithoutPurify = await Pubs.query().fetch()
        const allPubs = pubsWithoutPurify.toJSON()

        return view.render('AdminViews.layouts.Pub', {allPubs})
    }




    async addPub1 ({request, response, session}){

        const updateData = request.all()

        //FORM VALIDATION
       
        updateData.posterURL = request.file('posterURL')
        const rules = {
            applicant: 'required',
            spaceRequested: 'required',
            posterURL: 'required|file|file_ext:jpg,png,jpeg,JPG,PNG|file_size:2mb|file_types:image'
        }       
        const validation = await validateAll(updateData, rules)
        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            session.flash({ AddFail: 'Failed to add author' })
            return response.redirect('back')
        }
 
        //UPLOAD PROFILE_IMG RENAME AND MOVED 
         const posterURL = request.file('posterURL', {
            maxSize: '2mb',
            allowedExtensions: ['jpg', 'JPG', 'png', 'PNG', 'jpeg']
        })
        const fileName = `${new Date().getTime()}.${posterURL.subtype}`
        
        await posterURL.move(Helpers.publicPath('uploads/pubPosterIMG'), {
            name: fileName
        })
        
        if (!posterURL.moved()) {
            session.flash({ notification:{type:danger,message: posterURL.error().message}})
            return response.redirect('back')
        }

       // ADD NEW USER TO THE DATABASE
       const pub = new Pubs()
       pub.posterURL = `uploads/pubPosterIMG/${fileName}`
       pub.applicant = updateData.applicant
       pub.spaceRequested = updateData.spaceRequested

       await pub.save()
       session.flash({ PubsuccessAdd: 'Pub successfully added' })
       return response.redirect('back')
    }



    async addPub2 ({request, response, session}){

        const updateData = request.all()

        //FORM VALIDATION
       
        updateData.posterURL = request.file('posterURL')
        const rules = {
            applicant: 'required',
            spaceRequested: 'required',
            posterURL: 'required|file|file_ext:jpg,png,jpeg,JPG,PNG|file_size:2mb|file_types:image'
        }       
        const validation = await validateAll(updateData, rules)
        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            session.flash({ AddFail: 'Failed to add author' })
            return response.redirect('back')
        }
 
        //UPLOAD PROFILE_IMG RENAME AND MOVED 
         const posterURL = request.file('posterURL', {
            maxSize: '2mb',
            allowedExtensions: ['jpg', 'JPG', 'png', 'PNG', 'jpeg']
        })
        const fileName = `${new Date().getTime()}.${posterURL.subtype}`
        
        await posterURL.move(Helpers.publicPath('uploads/pubPosterIMG'), {
            name: fileName
        })
        
        if (!posterURL.moved()) {
            session.flash({ notification:{type:danger,message: posterURL.error().message}})
            return response.redirect('back')
        }

       // ADD NEW USER TO THE DATABASE
       const pub = new Pubs()
       pub.posterURL = `uploads/pubPosterIMG/${fileName}`
       pub.applicant = updateData.applicant
       pub.spaceRequested = updateData.spaceRequested

       await pub.save()
       session.flash({ PubsuccessAdd: 'Pub successfully added' })
       return response.redirect('back')
    }



    async addPub3 ({request, response, session}){

        const updateData = request.all()

        //FORM VALIDATION
       
        updateData.posterURL = request.file('posterURL')
        const rules = {
            applicant: 'required',
            spaceRequested: 'required',
            posterURL: 'required|file|file_ext:jpg,png,jpeg,JPG,PNG|file_size:2mb|file_types:image'
        }       
        const validation = await validateAll(updateData, rules)
        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            session.flash({ AddFail: 'Failed to add author' })
            return response.redirect('back')
        }
 
        //UPLOAD PROFILE_IMG RENAME AND MOVED 
         const posterURL = request.file('posterURL', {
            maxSize: '2mb',
            allowedExtensions: ['jpg', 'JPG', 'png', 'PNG', 'jpeg']
        })
        const fileName = `${new Date().getTime()}.${posterURL.subtype}`
        
        await posterURL.move(Helpers.publicPath('uploads/pubPosterIMG'), {
            name: fileName
        })
        
        if (!posterURL.moved()) {
            session.flash({ notification:{type:danger,message: posterURL.error().message}})
            return response.redirect('back')
        }

       // ADD NEW USER TO THE DATABASE
       const pub = new Pubs()
       pub.posterURL = `uploads/pubPosterIMG/${fileName}`
       pub.applicant = updateData.applicant
       pub.spaceRequested = updateData.spaceRequested

       await pub.save()
       session.flash({ PubsuccessAdd: 'Pub successfully added' })
       return response.redirect('back')
    }



    async addPub4 ({request, response, session}){

        const updateData = request.all()

        //FORM VALIDATION
       
        updateData.posterURL = request.file('posterURL')
        const rules = {
            applicant: 'required',
            spaceRequested: 'required',
            posterURL: 'required|file|file_ext:jpg,png,jpeg,JPG,PNG|file_size:2mb|file_types:image'
        }       
        const validation = await validateAll(updateData, rules)
        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            session.flash({ AddFail: 'Failed to add author' })
            return response.redirect('back')
        }
 
        //UPLOAD PROFILE_IMG RENAME AND MOVED 
         const posterURL = request.file('posterURL', {
            maxSize: '2mb',
            allowedExtensions: ['jpg', 'JPG', 'png', 'PNG', 'jpeg']
        })
        const fileName = `${new Date().getTime()}.${posterURL.subtype}`
        
        await posterURL.move(Helpers.publicPath('uploads/pubPosterIMG'), {
            name: fileName
        })
        
        if (!posterURL.moved()) {
            session.flash({ notification:{type:danger,message: posterURL.error().message}})
            return response.redirect('back')
        }

       // ADD NEW USER TO THE DATABASE
       const pub = new Pubs()
       pub.posterURL = `uploads/pubPosterIMG/${fileName}`
       pub.applicant = updateData.applicant
       pub.spaceRequested = updateData.spaceRequested

       await pub.save()
       session.flash({ PubsuccessAdd: 'Pub successfully added' })
       return response.redirect('back')
    }



}

module.exports = PubController
