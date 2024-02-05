import React from 'react'
import { AuthService } from './Services/Auth.Service'
import { AuthStore } from './Stores/Auth.Store'

interface IStoreContext {
    authStore: AuthStore
}

const authService = new AuthService()
const authStore = new AuthStore(authService)

export const StoreContext = React.createContext<IStoreContext>({
    authStore
});
