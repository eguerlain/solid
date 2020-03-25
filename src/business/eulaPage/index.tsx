import React from 'react'
import { Layout } from '../../ui/layout'
import { useTranslation } from 'react-i18next'
import { BackButton } from '../backButton'

export const EulaPage = () => {
    const { t } = useTranslation()
    return <Layout title={{ children: t('cgu'), leftIcon: <BackButton to='/' /> }}>
        <p>{t('conditions')}</p>
    </Layout>
}