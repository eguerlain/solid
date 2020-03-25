import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.sass'

const BACK_ICON = '🔙'

interface Props {
    to: string
}

export const BackButton = ({ to }: Props) => {
    return (
        <Link to={to}>
            <div className={styles.backButton}>
                {BACK_ICON}
            </div>
        </Link>
    )
}