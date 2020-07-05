'use strict'


class LoginController {
    
    show ({view}){

       return view.render('AdminViews.layouts.login')
    }



    async login ({request, auth, response, session}){

        const {email, password, remember} = request.all()
        
        try {
            await auth.remember(!!remember).attempt(email, password)

            // if (auth.user.role_id != 1) {   
            //     return response.send('you have not an athors')
            // }
            return response.route('AdminDashboad')

        } catch (error) {
            session.flash({ authentificated: "We couldn't verify your credentials" })
            return response.redirect('back') 
        }
   
    }



    async logout ({request, auth, response}){

        await auth.logout()
        return response.route('Login')
    }

}

module.exports = LoginController
