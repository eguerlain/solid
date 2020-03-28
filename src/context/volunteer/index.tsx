import React, { useContext } from 'react'
import { login as APILogin, signup as APISignup, SignupInformation } from '../../api/back'
import { useStateWithLocalStorage } from '../../technical/hooks/useStateWithLocalStorage'

const AUTHENTICATED = 'authenticated'
const TOKEN = 'token'

interface VolunteerContextInterface {
    isAuthenticated: boolean,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
    signup: (signupInformation: SignupInformation) => Promise<void>
    token: string | null,
    setToken: (token: string) => void
}

const defaultVolunteerContext: VolunteerContextInterface = {
    isAuthenticated: false,
    login: () => new Promise(() => { }),
    logout: () => { },
    signup: () => new Promise(() => { }),
    token: null,
    setToken: () => { }
}

const VolunteerContext = React.createContext<VolunteerContextInterface>(defaultVolunteerContext)

export const VolunteerContextProvider = ({
    children
}: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useStateWithLocalStorage<boolean>(AUTHENTICATED)
    const [token, setToken] = useStateWithLocalStorage<string>(TOKEN)

    return <VolunteerContext.Provider value={{
        isAuthenticated: isAuthenticated || false,
        login: async (username: string, password: string) => {
            const APItoken = await APILogin(username, password)
            setToken(APItoken)
            setIsAuthenticated(true)
        },
        logout: () => {
            setIsAuthenticated(false)
        },
        signup: async (signupInformation: SignupInformation) => {
            const APItoken = await APISignup(signupInformation)
            setToken(APItoken)
            setIsAuthenticated(true)
        },
        token,
        setToken,
    }}>
        {children}
    </VolunteerContext.Provider>
}

export const useVolunteerContext = () => useContext(VolunteerContext)