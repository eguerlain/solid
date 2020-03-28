import axios from 'axios'
import qs from 'qs'

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

export interface SignupInformation {
    firstname: string,
    lastname: string,
    phone: string,
    email: string,
    password: string,
    address: string,
}

const backClient = axios.create({
    baseURL: API_URL,
    timeout: 5000,
})

const geocodingClient = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:7000',
    timeout: 5000
})

export const signup = async (signupInformation: SignupInformation): Promise<string> => {
    const response = await backClient.post('/signup', signupInformation)

    return response.data.token
}

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

export interface VolunteerInformation {
    name: string,
    contactInformation: string,
    messageToShoppers: string
}

export interface Order {
    volunteerInformation: VolunteerInformation,
    items: Item[]
}

export const getNeedsAround = async (location: Location): Promise<Order[]> => {
    const response = await backClient.get(`/needs-around?${qs.stringify(location)}`)

    return response.data
}

export const tickItem = async (): Promise<void> => {
    return await backClient.patch('/items/123', {
        status: 'tick'
    })
}

export const untickItem = async (): Promise<void> => {
    return await backClient.patch('/items/123', {
        status: 'untick'
    })
}

export const geocode = async (address: string): Promise<any[]> => {
    const response = await geocodingClient.get(`/geocode?address=${address}`)

    return response.data
}

export interface Location {
    latitude: number,
    longitude: number
}

export const reverse = async (location: Location): Promise<any[]> => {
    const response = await geocodingClient.get(`/reverse?${qs.stringify(location)}`)

    return response.data
}