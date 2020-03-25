import axios from 'axios'

const API_URL = 'http://localhost:5000'

export interface Item {
    title: string,
    quantity: number,
    id: string,
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

export const getList = async (id: string): Promise<List> => {
    const response = await backClient.get(`/lists/${id}`)

    return response.data
}

export const addItemToList = async (item: { title: string, quantity: number }, list: List): Promise<Item> => {
    const response = await backClient.post(`/lists/${list.id}/items`, item)

    return response.data
}