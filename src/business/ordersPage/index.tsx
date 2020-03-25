import React from 'react'
import { Layout } from '../../ui/layout'
import { useTranslation } from 'react-i18next'
import { BackButton } from '../backButton'
import { Order } from '../../ui/order'

export const OrdersPage = () => {
    const { t } = useTranslation()
    const titleChildren = <div>
        <p>{t('needs-around')}</p>
        <p>5, rue du Poirier, 75014, PARIS</p>
    </div>
    return <Layout title={{ children: titleChildren, leftIcon: <BackButton to='location' /> }}>
        <Order />
        <Order />
        <Order />
    </Layout>
}