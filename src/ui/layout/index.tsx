import React from 'react'
import { Title, Props as TitleProps } from '../title'
import styles from './index.module.sass'

interface Props {
    title: TitleProps,
    children: React.ReactNode
}

export const Layout = ({ title, children }: Props) => {
    return (
        <div className={styles.layout}>
            <Title {...title} />
            {children}
        </div>
    )
}