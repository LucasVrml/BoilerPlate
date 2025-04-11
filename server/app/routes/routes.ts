import router from '@adonisjs/core/services/router'
import AuthController from '#controllers/auth_controller'
import { middleware } from '#start/kernel'

router.post('/register', [AuthController, 'register'])
router.post('/login', [AuthController, 'login'])
router.get('/is-logged', [AuthController, 'isLogged']).use(middleware.auth())
router.post('/logout', [AuthController, 'logout']).use(middleware.auth())
router
  .get('/protected', ({ response }) => {
    return response.status(200).noContent()
  })
  .use(middleware.auth())
