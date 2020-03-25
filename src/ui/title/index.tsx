import React from 'react'
import styles from './index.module.sass'
import { WarningButton } from '../../business/warningButton'

export interface Props {
    leftIcon?: React.ReactNode
    children: React.ReactNode
}

export const Title = ({ leftIcon, children }: Props) => {
    return (
        <div className={styles.title}>
            {
                leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>
            }
            <div className={styles.label}>{children}</div>
            <WarningButton />
        </div>
    )
}