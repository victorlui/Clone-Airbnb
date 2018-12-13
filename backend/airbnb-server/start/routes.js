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
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//rota para cadastar um usuario
Route.post('/users','UserController.create')

//rota para login do usuario
Route.post('/sessions','SessionController.create')

//Route.get('/index','PropertyController.index').middleware('auth')

//rotas para cadastar, listar, alterar  e deletar os imoveis
Route.resource('properties', 'PropertyController').apiOnly().middleware('auth')

//cadastar a imagesn no imovel
Route.post('/properties/:id/images', 'ImageController.store').middleware('auth')

Route.get('images/:path', 'ImageController.show')
