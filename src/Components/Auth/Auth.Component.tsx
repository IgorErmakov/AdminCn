import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {Dialog, TextField, Button, Container} from '@mui/material'

import { StoreContext } from '../../Store.Context'
import './auth.style.css'

const AuthView: React.FC = () => {
    const { authStore } = useContext(StoreContext)
    const authenticated = authStore.isAuthenticated()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Dialog open={!authenticated}>
                <form onSubmit={e => { authStore.login({ email, password }); e.preventDefault()}}>
                    <div className="container">
                        <TextField
                            className="text-field"
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            className="text-field"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit">
                            Login
                        </Button>
                    </div>
                </form>
            </Dialog>
            {authenticated &&
                <Container>
                    You're logged in
                </Container>
            }
        </>
    )
}

const Auth = observer(AuthView)

export { Auth }