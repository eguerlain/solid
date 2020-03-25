import React from 'react'
import { Layout } from '../../ui/layout'
import { BackButton } from '../backButton'
import { useTranslation } from 'react-i18next'
import { Input } from '../../ui/input'
import { Button } from '../../ui/button'
import { useVolunteerContext } from '../../context/volunteer'
import { useHistory } from 'react-router-dom'

export const ParametersPage = () => {
    const { t } = useTranslation()
    const { logout: logOutContext } = useVolunteerContext()
    const history = useHistory()

    const logout = () => {
        logOutContext()
        history.push('/login')
    }

    return <Layout title={{ leftIcon: <BackButton to='volunteer' />, children: t('parameters') }}>
        <Input value='' placeholder={t('contact-information')} onChange={() => { }} />
        <Input value='' placeholder={t('message-to-shoppers')} onChange={() => { }} />
        <Button>{t('save')}</Button>
        <Button onClick={logout}>{t('logout')}</Button>
    </Layout>
}