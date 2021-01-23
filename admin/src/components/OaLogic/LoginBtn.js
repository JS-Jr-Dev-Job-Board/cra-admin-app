import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginBtn = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                download experimental malware
            </button>
        )
    )
}

export default LoginBtn
