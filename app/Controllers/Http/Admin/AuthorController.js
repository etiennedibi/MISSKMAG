'use strict'

const { validateAll } = use('Validator')
const Users = use('App/Models/User')
const Articles = use('App/Models/Article')
const Helpers = use('Helpers')
const Mail = use('Mail')

class AuthorController {

    
    
    async show ({view, auth}){

         //REUPERATION DE LA DATE ACTUELLE
         const Today = new Date()
         const year = Today.getFullYear()
         const month = Today.getMonth() + 1
         const Topday = 1
         const Bottonday = 30
         const actualMonthTop = year + '-' + month + '-' + Topday
         const actualMonthBotton = year + '-' + month + '-' + Bottonday
        
        // RECUPERATION DE TOUS LES AUTEURS
        const usersWithoutPurify =  await Users.query().orderBy('id', 'desc').with('article').with('video').fetch()
        const users = usersWithoutPurify.toJSON();

        // RECUPERATION DES AUTEURS AYANT ECRIS DURANT L'ACTUEL MOIS
        const moreActiveUserWithoutPurify = await Articles.query().groupBy('user_id').with('user').whereBetween('created_at',[actualMonthTop,actualMonthBotton]).fetch()
        const moreActiveUsers = moreActiveUserWithoutPurify.toJSON()
        // RECUPERATION du nombre d'article ecrit par auteur dans la même periode
        const allMoreActive = new Array()
        for (let i = 0; i < moreActiveUsers.length; i++) { 
            const moreActiveArticleWithoutPurify = await Articles.query().where('user_id', moreActiveUsers[i].user.id).whereBetween('created_at',[actualMonthTop,actualMonthBotton]).count()
            const moreActiveArticle = moreActiveArticleWithoutPurify[0]['count(*)']

            allMoreActive.push({user: moreActiveUsers[i].user, moreActiveArticle})  
        }
        
        return view.render('AdminViews.layouts.Authors', {users, allMoreActive})
     }



     showProfil ({view, params}){
        return view.render('AdminViews.layouts.profilUpdate')
     }



     async updateProfil({request, response, auth}){

        const updateData = request.all()
        const {_csrf, _method, ...rest} = updateData

        auth.user.merge(rest)

        await auth.user.save()

        return response.route('AdminAuthorView')
     }





    async signUp ({request, response, session}){

       
        const userData = request.all()
         
       
        //FORM VALIDATION
       
        userData.ProfilIMG = request.file('ProfilIMG')
        const rules = {
            lastname: 'required',
            firtname: 'required',
            ProfilIMG:'required',
            country: 'required',
            city: 'required',
            age: 'required',
            role_id:'required',
            description: 'required',
            email: 'required|email|unique:users,email',
            password: 'required',
            ProfilIMG: 'required|file|file_ext:jpg,png,jpeg,JPG,PNG|file_size:2mb|file_types:image'

        }
        
        const validation = await validateAll(userData, rules)

        if (validation.fails()) {
            session.withErrors(validation.messages()).flashExcept(['password'])
            session.flash({ AddFail: 'Failed to add author' })

            return response.redirect('back')
        }
        
        
        //UPLOAD PROFILE_IMG RENAME AND MOVED
        
         const profilIMG = request.file('ProfilIMG', {
            maxSize: '2mb',
            allowedExtensions: ['jpg', 'JPG', 'png', 'PNG', 'jpeg']
        })


        const fileName = `${new Date().getTime()}.${profilIMG.subtype}`
        
        await profilIMG.move(Helpers.publicPath('uploads/profilIMG'), {
            name: fileName
        })
        
        if (!profilIMG.moved()) {
            session.flash({ notification:{
                    type:danger,
                    message: profilIMG.error().message
                } 
            })

            return response.redirect('back')
        }


       // ADD NEW USER TO THE DATABASE

        userData.ProfilIMG = `uploads/profilIMG/${fileName}`

        const {_csrf, ...rest} = userData
        
        
        const User = await Users.create(rest, rules)

        await Mail.send('AdminViews.layouts.emails.authorWelcome', userData, (message) => {
            message
              .to(userData.email)
              .from('MissK.mag')
              .subject('Welcome to Miss K Mag')
          })

        session.flash({ successAdd: 'Author successfully added' })
        return response.redirect('back')

       
    }


















}

module.exports = AuthorController
