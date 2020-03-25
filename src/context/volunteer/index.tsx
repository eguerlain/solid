import React, { useContext } from 'react'
import { useStateWithLocalStorage } from '../../technical/hooks/useStateWithLocalStorage'
import { login as APILogin, getLists as APIGetLists, Item, List } from '../../api/back'

const AUTHENTICATED = 'authenticated'
const LISTS = 'volunteer-lists'

interface VolunteerContextInterface {
    isAuthenticated: boolean,
    login: (username: string, password: string) => Promise<void>,
    logout: () => void,
    // lists: List[],
    // getLists: () => Promise<void>,
    // addList: (list: List) => void,
    addItemToList: (item: Item, list: List) => void,
}

const defaultVolunteerContext: VolunteerContextInterface = {
    isAuthenticated: false,
    login: () => new Promise(() => { }),
    logout: () => { },
    // lists: [],
    // getLists: () => new Promise(() => { }),
    // addList: () => { },
    addItemToList: () => { }
}

const VolunteerContext = React.createContext<VolunteerContextInterface>(defaultVolunteerContext)

// const fake_lists = [
//     {
//         title: 'Moi',
//         id: v4(),
//         items: []
//     },
//     {
//         title: 'Yvette',
//         id: '456',
//         items: [
//             {
//                 id: v4(),
//                 title: 'Pain',
//                 quantity: 2
//             },
//             {
//                 id: v4(),
//                 title: 'Eau',
//                 quantity: 4
//             },
//             {
//                 id: v4(),
//                 title: 'Oeufs',
//                 quantity: 6
//             },
//         ]
//     },
// ]

export const VolunteerContextProvider = ({
    children
}: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useStateWithLocalStorage<boolean>(AUTHENTICATED)
    const [lists, setLists] = useStateWithLocalStorage<List[]>(LISTS)

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
        // lists: lists || [],
        // getLists: async () => {
        //     const APILists = await APIGetLists()
        //     setLists(APILists)
        // },
        // addList: (list: List) => {
        //     setLists((lists || []).concat(list))
        // },
        addItemToList: (item: Item, list: List) => {
            setLists((lists || []).map(l => {
                if (l.id === list.id) {
                    l.items = list.items.concat(item)
                }
                return l
            }))
        }
    }}>
        {children}
    </VolunteerContext.Provider>
}

export const useVolunteerContext = () => useContext(VolunteerContext)