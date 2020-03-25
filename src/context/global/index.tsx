import React, { useContext, useEffect } from 'react';
import { v4 } from 'uuid';
import { useStateWithLocalStorage } from '../../technical/hooks/useStateWithLocalStorage';
import i18n from '../../translation/i18n';

const LANGUAGE = 'language'
const BROWSER_SESSION_ID = 'browser-session-id'
const LOCATION = 'location'

enum Language {
    fr = 'fr',
    en = 'en'
}

export interface Location {
    latitude: number,
    longitude: number
}

interface GlobalContextInterface {
    language: Language,
    toggleLanguage: () => void,
    browserSessionId: string | null,
    location: Location | null,
    setLocation: (location: Location) => void
}

const defaultContext: GlobalContextInterface = {
    language: Language.fr,
    toggleLanguage: () => { },
    browserSessionId: null,
    location: null,
    setLocation: () => { }
}

const GlobalContext = React.createContext<GlobalContextInterface>(defaultContext)

export const GlobalContextProvider = ({
    children
}: { children: React.ReactNode }) => {
    // Context              https://www.carlrippon.com/react-context-with-typescript-p1/
    const [language, setLanguage] = useStateWithLocalStorage<Language | null>(LANGUAGE)
    const [browserSessionId, setBrowserSessionId] = useStateWithLocalStorage<string>(BROWSER_SESSION_ID)
    const [location, setLocation] = useStateWithLocalStorage<Location>(LOCATION)

    useEffect(() => {
        if (!browserSessionId) {
            const id = v4()
            setBrowserSessionId(id)
        }
    }, [browserSessionId, setBrowserSessionId])

    useEffect(() => {
        i18n.changeLanguage(language || Language.fr)
    }, [language])

    return <GlobalContext.Provider value={{
        language: language || Language.fr,
        browserSessionId,
        location,
        setLocation,
        toggleLanguage: () => {
            const newLanguage = language === Language.en ? Language.fr : Language.en
            setLanguage(newLanguage)
        },
    }}>
        {children}
    </GlobalContext.Provider >
}

export const useGlobalContext = () => useContext(GlobalContext)