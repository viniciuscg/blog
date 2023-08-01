import Route from '@ioc:Adonis/Core/Route'

Route.post('/register', 'UsersController.registerUser')
Route.post('/login', 'UsersController.login')
Route.post('/createPost', 'PostsController.createPost').middleware('auth')
Route.post('/createComment', 'PostsController.createComment').middleware('auth')
Route.get('/getUserByToken', 'UsersController.getUserByToken').middleware('auth')
Route.get('/getUser', 'UsersController.getUser').middleware('auth')
Route.get('/getPosts/:id', 'PostsController.getPosts')
Route.delete('/deletePost/:id', 'PostsController.deletePost')
Route.get('/logged-user', 'UsersController.loggedUser').middleware('auth')
Route.post('/updateUser', 'UsersController.updateUser').middleware('auth')