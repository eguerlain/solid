import React from 'react'
import { Layout } from '../../ui/layout'
import { LanguageToggleButton } from '../languageToggleButton'
import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/button'
import { useVolunteerContext } from '../../context/volunteer'

export const HomePage = () => {
    const { t } = useTranslation()
    const { isAuthenticated } = useVolunteerContext()

    const titleChildren = "SOLID"
    return <Layout title={{ leftIcon: <LanguageToggleButton />, children: titleChildren }}>
        <p>{t('welcome')}</p>
        <p>{t('explanations')}</p>
        <Button linkTo="location">{t('i-go-shopping')}</Button>
        <p>{t('explanations2')}</p>
        {
            !isAuthenticated && <>
                <Button linkTo='signup'>{t('i-become-volunteer')}</Button>
                <Button linkTo="login">{t('i-am-already-volunteer')}</Button>
            </>
        }
        {
            isAuthenticated && <>
                <Button linkTo="volunteer">{t('access-my-volunteer-space')}</Button>
            </>
        }
        <Button linkTo="cgu">{t('cgu')}</Button>
    </Layout>
}