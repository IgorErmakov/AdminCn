import { LoginRequest } from '../Dto/Request/LoginRequest.Dto'
import { BACKEND_API_URL } from '../Utils/Url'

interface ILoginResponse {
    access_token: string
}

export class AuthService
{
    async login(loginRequest: LoginRequest): Promise<ILoginResponse>
    {
        const response = await fetch(`${BACKEND_API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginRequest)
        })

        const parsedResponse = await response.json() // as {}

        if (!response.ok) {
            throw new Error(parsedResponse)
        }

        return parsedResponse as ILoginResponse
    }
}
