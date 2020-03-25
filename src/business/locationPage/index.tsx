import React from 'react'
import { useTranslation } from 'react-i18next'
import { Location, useGlobalContext } from '../../context/global'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Layout } from '../../ui/layout'
import { BackButton } from '../backButton'


export const LocationPage = () => {
    const { t } = useTranslation()
    const { setLocation } = useGlobalContext()

    const getUserCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords
                const location: Location = { latitude, longitude }
                resolve(location)
            }, err => reject(err), {
                enableHighAccuracy: true,
                timeout: 30 * 1000,
                maximumAge: 5 * 1000
            })
        })
    }

    const locateUser = async () => {
        try {
            const location = await getUserCurrentLocation()
            setLocation(location)
        } catch (err) {
            console.log(err)
        }
    }

    return <Layout title={{ leftIcon: <BackButton to="/" />, children: t('my-address') }}>
        <p>{t('explanations-location')}</p>
        <Button onClick={locateUser} >{t('locate-me')}</Button>
        <p>{t('or')}</p>
        <Input value="" placeholder={t('street')} onChange={() => { }} />
        <Button linkTo='orders'>OK</Button>
    </Layout>
}