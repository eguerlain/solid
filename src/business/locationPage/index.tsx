import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Location, reverse, geocode } from '../../api/back'
import { useGlobalContext } from '../../context/global'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Layout } from '../../ui/layout'
import { notify } from '../../ui/toast'
import { BackButton } from '../backButton'
import { useHistory } from 'react-router-dom'

export const LocationPage = () => {
    const { t } = useTranslation()
    const {
        location,
        setLocation,
        address,
        setAddress
    } = useGlobalContext()
    const history = useHistory()
    const [userAddressInput, setUserAddressInput] = useState<string>(address || '')

    const getUserBrowserLocation = (): Promise<Location> => {
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

    const getAddressFromLocation = async () => {
        try {
            const location = await getUserBrowserLocation()
            setLocation(location)
            try {
                const addresses = await reverse(location)
                if (addresses.length) {
                    setAddress(addresses[0].formattedAddress)
                    setUserAddressInput(addresses[0].formattedAddress)
                }
            } catch (error) {
                notify(t('could-not-reverse-location'))
                // TODO do something when we can't reverse the location
            }
        } catch (err) {
            // TODO do something when we can't get the location
            notify(t('could-not-get-location'))
        }
    }

    const getLocationAndAddressFromUserInput = async () => {
        try {
            const addresses = await geocode(userAddressInput)
            if (addresses.length) {
                const place = addresses[0]
                setLocation({ latitude: place.latitude, longitude: place.longitude })
                setAddress(place.formattedAddress)
                setUserAddressInput(place.formattedAddress)
            } else {
                throw new Error()
            }
        } catch (error) {
            throw error
        }
    }

    const handleOk = async () => {
        // LOCATION     ADDRESS     USER_INPUT          RESULT
        //
        //      X           X           X               Display error
        //      V           X           X               Error display
        //      V           V           V               Go to needs-arounds
        //      V           V           W               Ask for geocoding. If ok, save location & address, then go to needs around. If ko, error display
        //      X           X           V               Same than above

        if (!location && !address && !userAddressInput.trim()) {
            notify('please-locate-or-provide-address')
            return
        }

        if (location && !address && !userAddressInput.trim()) {
            notify('cant-find-you-try-by-hand')
            return
        }

        if (location && address && userAddressInput === address) {
            history.push('/orders')
            return
        }

        try {
            await getLocationAndAddressFromUserInput()  // Ask for geocoding of user input. If ok, save to context, else throw error
            history.push('/orders') // Everything went weel, going to the needs around
        } catch (error) {
            notify(t('cannot-find-indicated-place'))
        }
    }

    /**
     * FLOWS
     * 
     *  - Filling the field and clicking OK : recomputing location and format
     *    address, then send location + address as is
     *  - OK button disabled if field is empty
     */


    return <Layout title={{ leftIcon: <BackButton to="/" />, children: t('my-address') }}>
        <p>{t('explanations-location')}</p>
        <Button onClick={getAddressFromLocation} >{t('locate-me')}</Button>
        <p>{t('or')}</p>
        <Input value={userAddressInput} placeholder={t('street')} onChange={event => setUserAddressInput(event.target.value)} onAction={handleOk} />
        <div>
            <Button onClick={handleOk}>OK</Button>
        </div>
    </Layout>
}