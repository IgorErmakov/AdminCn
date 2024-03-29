import { makeAutoObservable } from 'mobx'
import { LoginRequest } from '../Dto/Request/LoginRequest.Dto'
import { AuthService } from '../Services/Auth.Service'

export class AuthStore
{
    private authenticated = false

    constructor(private readonly authService: AuthService)
    {
        makeAutoObservable(this);
        this.authenticated = !!this.getAccessToken()
    }

    async login(loginRequest: LoginRequest)
    {
        try {
            const tokenPayloadDto = await this.authService.login(loginRequest)
            localStorage.setItem('access_token', tokenPayloadDto.access_token)
            this.setAuthenticated(true)
        } catch (err) {
            this.setAuthenticated(false)
        }
    }

    private setAuthenticated(authenticated: boolean)
    {
        this.authenticated = authenticated
    }

    getAccessToken()
    {
        return localStorage.getItem('access_token')
    }

    isAuthenticated()
    {
        return this.authenticated
    }
}
