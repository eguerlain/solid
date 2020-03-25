import React, { useState } from 'react'
import styles from './index.module.sass'
import { Collapse } from 'react-collapse'
import { DownArrow } from './downArrowIcon'
import { Color } from '../style'
import './collapse.css'
import classnames from 'classnames'

interface Volunteer {
    name: "Joe Biden",
    address: "10, rue de la Tournette, 75006 PARIS"
}

interface Item {
    title: string,
    quantity: number,
    available: boolean
}

interface Props {
    volunteer?: Volunteer,
    items?: Item[]
}

const fake_items: Item[] = [
    {
        title: 'Pain',
        quantity: 4,
        available: true
    },
    {
        title: 'Eau',
        quantity: 3,
        available: false
    },
    {
        title: 'Vin',
        quantity: 4,
        available: true
    },
]

export const Order = ({ volunteer, items }: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return <div className={styles.order}>
        <div className={styles.header}>
            <div className={styles.name} onClick={() => setIsOpen(!isOpen)}>
                <p>{"volunteer.name"}</p>
                <DownArrow color={Color.white} reverse={isOpen} />
            </div>
            <Collapse isOpened={isOpen} >
                <p className={styles.address}>{"volunteer.address"}</p>
            </Collapse>
        </div>
        <ul className={styles.list}>
            {
                fake_items.map(item => <li key={item.title} className={styles.item}>
                    <div className={classnames(styles.itemContent, {
                        [styles.available]: !item.available
                    })}>

                        <span>{item.title}</span>
                        <span>(X{item.quantity})</span>
                    </div>
                </li>)
            }
        </ul>
    </div>
}