import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

export interface Item {
    title: string,
    quantity: number,
    id: string,
    boughtBy: string | null
}

export interface List {
    title: string,
    id: string,
    items: Item[]
}


const backClient = axios.create({
    baseURL: API_URL,
    timeout: 5000,
})

export const login = async (username: string, password: string): Promise<string> => {
    const response = await backClient.post('/login', {
        username,
        password
    })

    return response.data.token
}

export const getLists = async (): Promise<{ title: string, id: string }[]> => {
    const response = await backClient.get('/lists')

    return response.data
}

export const addList = async (title: string): Promise<List> => {
    const response = await backClient.post(`/lists`, { title })

    return response.data
}

export const getList = async (id: string): Promise<List> => {
    const response = await backClient.get(`/lists/${id}`)

    return response.data
}

export const addItemToList = async (item: { title: string, quantity: number }, list: List): Promise<Item> => {
    const response = await backClient.post(`/lists/${list.id}/items`, item)

    return response.data
}

export const removeItemFromList = async (itemId: string, list: List): Promise<void> => {
    return await backClient.delete(`/lists/${list.id}/items/${itemId}`)
}

export const getParameters = async (): Promise<{ contactInformation: string, messageToShoppers: string }> => {
    const response = await backClient.get('/parameters')

    return response.data
}

export const setParameters = async (parameters: { contactInformation: string, messageToShoppers: string }): Promise<void> => {
    return await backClient.put('/parameters', parameters)
}