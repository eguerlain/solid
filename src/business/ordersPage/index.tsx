import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { getNeedsAround, Order as IOrder } from '../../api/back'
import { useGlobalContext } from '../../context/global'
import { Layout } from '../../ui/layout'
import { Order } from '../../ui/order'
import { notify } from '../../ui/toast'
import { BackButton } from '../backButton'

export const OrdersPage = () => {
    const { t } = useTranslation()
    const { location, address } = useGlobalContext()
    const loc = useLocation()
    const state = loc.state
    const backpath: string = state ? (state as any).backpath : 'location'

    const [orders, setOrders] = useState<IOrder[] | null>(null)
    const [wasDataFetched, setWasDataFetched] = useState<boolean>(false)

    useEffect(() => {
        const fetchData = async () => {
            if (!wasDataFetched && location) {
                try {
                    const APINeeds = await getNeedsAround(location)
                    setOrders(APINeeds)
                } catch (error) {
                    notify(t('could-not-fetch-data'))
                }
                setWasDataFetched(true)
            }
        }

        fetchData()
    }, [wasDataFetched, setWasDataFetched, t, location])

    const titleChildren = <div>
        <p>{t('needs-around')}</p>
        {
            address
        }
    </div>

    return <Layout title={{ children: titleChildren, leftIcon: <BackButton to={backpath} /> }}>
        {
            !location && <p>{t('please-provide-location')}</p>
        }
        {
            orders && orders.map((order, index) => <Order
                key={index}
                volunteerInformation={order.volunteerInformation}
                items={order.items}
            />)
        }
    </Layout>
}