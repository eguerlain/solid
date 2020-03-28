import React, { useState } from 'react'
import styles from './index.module.sass'
import { Collapse } from 'react-collapse'
import { DownArrow } from './downArrowIcon'
import { Color } from '../style'
import './collapse.css'
import classnames from 'classnames'
import { Item, VolunteerInformation, untickItem as APIUntickItem, tickItem as APITickItem } from '../../api/back'
import { notify } from '../toast'
import { useTranslation } from 'react-i18next'

interface Props {
    volunteerInformation: VolunteerInformation,
    items: Item[]
}

export const Order = ({ volunteerInformation, items: baseItems }: Props) => {

    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [items, setItems] = useState<Item[]>(baseItems)

    const untickItem = async (item: Item) => {
        try {
            await APIUntickItem()
            setItems(items.map(i => {
                if (i.id === item.id) {
                    i.boughtBy = null
                }
                return i
            }))
        } catch (error) {
            notify(t('could-not-untick-item'))
        }
    }

    const tickItem = async (item: Item) => {
        try {
            await APITickItem()
            setItems(items.map(i => {
                if (i.id === item.id) {
                    i.boughtBy = 'browser-session-id'
                }
                return i
            }))
        } catch (error) {
            notify(t('could-not-tick-item'))
        }
    }

    const toggleItemStatus = async (item: Item) => {
        if (item.boughtBy) {
            await untickItem(item)
        } else {
            await tickItem(item)
        }
    }

    return <div className={styles.order}>
        <div className={styles.header}>
            <div className={styles.name} onClick={() => setIsOpen(!isOpen)}>
                <p>{volunteerInformation.name}</p>
                <DownArrow color={Color.white} reverse={isOpen} />
            </div>
            <Collapse isOpened={isOpen} >
                <p className={styles.address}>{volunteerInformation.contactInformation}</p>
                <p className={styles.address}>{volunteerInformation.messageToShoppers}</p>
            </Collapse>
        </div>
        <ul className={styles.list}>
            {
                items.map(item => <li
                    key={item.title}
                    className={classnames(styles.item, {
                        [styles.notAvailableToBuy]: item.boughtBy
                    })}
                    onClick={() => { toggleItemStatus(item) }}
                >
                    <div className={styles.itemContent}>

                        <span>{item.title}</span>
                        <span>(X{item.quantity})</span>
                    </div>
                </li>)
            }
        </ul>
    </div>
}