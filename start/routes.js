'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')





/*
----------------------------
----- THE CLIENT INTERFACE ROUTES ----
-----------------------------
*/

//Route.on('/').render('AdminViews/layouts/Authors')

Route.get('/', 'Client/HomeController.show').as('HomeView').middleware(['VisitorIncrementation'])


Route.get('video', 'Client/VideoController.show').as('VideoView').middleware(['VisitorIncrementation'])
Route.get('advertising', 'Client/AdvertisingController.show').as('AdversitingView').middleware(['VisitorIncrementation'])
Route.get('about', 'Client/AboutController.show').as('AboutView').middleware(['VisitorIncrementation'])





/*
----------------------------
----- THE ADMIN  ROUTES ----
-----------------------------
*/

// Authentification
Route.get('admin/Dashboad', 'Admin/DashboadController.show').as('AdminDashboad').middleware(['auth'])


// Authentification
Route.post('admin/authors', 'Admin/AuthorController.signUp').as('signUp')
Route.get('admin/login', 'Admin/LoginController.show').as('Login')
Route.post('admin/logout', 'Admin/LoginController.logout').as('logout')
Route.post('admin/login', 'Admin/LoginController.login').as('LoginView')


//User Account Management
Route.get('admin/authors', 'Admin/AuthorController.show').as('AdminAuthorView').middleware(['auth'])
Route.get('admin/authors/profilUpdate', 'Admin/AuthorController.showProfil').as('ProfilView')
Route.put('admin/authors/profilUpdate', 'Admin/AuthorController.updateProfil').middleware(['auth'])


//Article Management
Route.get('admin/articles', 'Admin/ArticleController.show').as('articleAdminView').middleware(['auth'])
Route.post('admin/categorie', 'Admin/ArticleController.addCategorie').as('addCategorie')
Route.post('admin/articles', 'Admin/ArticleController.addArticle').as('addArticle')


//Video Management
Route.get('admin/video', 'Admin/VideoController.show').as('VideoAdmin').middleware(['auth'])
Route.post('admin/video', 'Admin/VideoController.addVideo').as('addVideo')

//Pub Management
Route.get('admin/pub', 'Admin/PubController.show').as('PubAdmin').middleware(['auth'])
Route.post('admin/pub/pubUpdate1', 'Admin/PubController.addPub1').as('addPub1')
Route.post('admin/pub/pubUpdate2', 'Admin/PubController.addPub2').as('addPub2')
Route.post('admin/pub/pubUpdate3', 'Admin/PubController.addPub3').as('addPub3')
Route.post('admin/pub/pubUpdate4', 'Admin/PubController.addPub4').as('addPub4')






/*
---------------------------------
----- ALL ROUTES WITH PARAMS ----
---------------------------------
*/

//For Client
Route.get('article/:id', 'Client/ArticleController.show').as('ArticleView').middleware(['VisitorIncrementation'])
Route.get('categorie/:id', 'Client/CategorieController.show').as('CategorieView').middleware(['VisitorIncrementation'])

//For Admin
Route.get('admin/article/:id', 'Admin/ArticleController.showArticle').as('AdminArticleView').middleware(['auth'])
Route.delete('admin/article/delete/:id', 'Admin/ArticleController.deletedArticle')