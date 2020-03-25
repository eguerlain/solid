import React from 'react'
import { Layout } from '../../ui/layout'
import { useTranslation } from 'react-i18next'
import { BackButton } from '../backButton'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'

export const SignupPage = () => {
    const { t } = useTranslation()
    return <Layout title={{ leftIcon: <BackButton to='/' />, children: t('signup-title') }}>
        <p>{t('signup-explanations')}</p>
        <Button linkTo='login' >{t('already-volunteer-button')}</Button>
        <p>{t('signup-explanations-2')}</p>
        <Input value="" placeholder={t('firstname')} onChange={() => { }} />
        <Input value="" placeholder={t('lastname')} onChange={() => { }} />
        <Input value="" placeholder={t('phone')} onChange={() => { }} />
        <Input value="" placeholder={t('email')} onChange={() => { }} />
        <Input value="" placeholder={t('password')} onChange={() => { }} />
        <Input value="" placeholder={t('password-confirmation')} onChange={() => { }} />
        <Input value="" placeholder={t('address')} buttonLabel={t('locate-me')} onChange={() => { }} />
        <Button linkTo="volunteer">OK</Button>
    </Layout>
}