import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async register({ request, auth, response }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const alreadyUsedEmail = await User.findBy('email', email)
    if (alreadyUsedEmail) {
      return response.status(500)
    }
    const user = await User.create({ email, password })
    await auth.use('web').login(user, !!request.input('remember_me'))
    return user
  }

  public async login({ request, auth }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])
    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user, !!request.input('remember_me'))
    return user
  }

  public async logout({ auth }: HttpContext) {
    await auth.use('web').logout()
    return
  }

  public async isLogged({ auth }: HttpContext) {
    return auth.user
  }
}
