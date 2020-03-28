import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/button'
import { Layout } from '../../ui/layout'

export const VolunteerPage = () => {
    const { t } = useTranslation()
    return <Layout title={{ children: t('volunteer-space') }}>
        <p>{t('epxplanations-volunteer')}</p>
        <Button linkTo="lists" >{t('manage-my-needs')}</Button>
        <Button linkTo={{
            pathname: 'orders',
            state: {
                backpath: 'volunteer'
            }
        }} >{t('i-go-shopping')}</Button>
        <Button linkTo="parameters" >{t('parameters')}</Button>
    </Layout>
}