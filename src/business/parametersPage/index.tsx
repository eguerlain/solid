import React, { useState, useEffect } from 'react'
import { Layout } from '../../ui/layout'
import { BackButton } from '../backButton'
import { useTranslation } from 'react-i18next'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useVolunteerContext } from '../../context/volunteer'
import { useHistory } from 'react-router-dom'
import { notify } from '../../ui/toast'
import { getParameters, setParameters } from '../../api/back'

export const ParametersPage = () => {
    const { t } = useTranslation()
    const { logout: logOutContext } = useVolunteerContext()
    const history = useHistory()
    const [contactInformation, setContactInformation] = useState<string>('')
    const [messageToShoppers, setMessageToShoppers] = useState<string>('')
    const [wasDataFetched, setWasDataFetched] = useState<boolean>(false)

    const saveParameters = async () => {
        try {
            await setParameters({ contactInformation, messageToShoppers })
        } catch (error) {
            notify(t('could-not-save-parameters'))
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { contactInformation, messageToShoppers } = await getParameters()
                setContactInformation(contactInformation)
                setMessageToShoppers(messageToShoppers)
            } catch (err) {
                notify(t('could-not-retrieve-information'))
            }
        }

        fetchData()
    }, [wasDataFetched, setWasDataFetched])

    const logout = () => {
        logOutContext()
        history.push('/login')
    }

    return <Layout title={{ leftIcon: <BackButton to='volunteer' />, children: t('parameters') }}>
        <Input value={contactInformation} placeholder={t('contact-information')} onChange={event => setContactInformation(event.target.value)} onAction={saveParameters}/>
        <Input value={messageToShoppers} placeholder={t('message-to-shoppers')} onChange={event => setMessageToShoppers(event.target.value)} onAction={saveParameters} />
        <Button onClick={saveParameters}>{t('save')}</Button>
        <Button onClick={logout}>{t('logout')}</Button>
    </Layout>
}