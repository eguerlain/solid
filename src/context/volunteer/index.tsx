import React, { useContext } from 'react'
import { useStateWithLocalStorage } from '../../technical/hooks/useStateWithLocalStorage'
import { login as APILogin, getLists as APIGetLists, Item, List } from '../../api/back'

const AUTHENTICATED = 'authenticated'

interface VolunteerContextInterface {
    isAuthenticated: boolean,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
}

const defaultVolunteerContext: VolunteerContextInterface = {
    isAuthenticated: false,
    login: () => new Promise(() => { }),
    logout: () => { },
}

const VolunteerContext = React.createContext<VolunteerContextInterface>(defaultVolunteerContext)

export const VolunteerContextProvider = ({
    children
}: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useStateWithLocalStorage<boolean>(AUTHENTICATED)

    return <VolunteerContext.Provider value={{
        isAuthenticated: isAuthenticated || false,
        login: async (username: string, password: string) => {
            const token = await APILogin(username, password)
            // TODO store token somewhere (should be all volunteer info?)
            setIsAuthenticated(true)
        },
        logout: () => {
            setIsAuthenticated(false)
        },
    }}>
        {children}
    </VolunteerContext.Provider>
}

export const useVolunteerContext = () => useContext(VolunteerContext)