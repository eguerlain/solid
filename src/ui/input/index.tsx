import React, { ChangeEvent } from 'react'
import styles from './index.module.sass'

interface Props {
    value: string,
    placeholder: string,
    type?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onAction?: () => void,
    buttonLabel?: string
}

export const Input = ({ value, placeholder, onAction, onChange, buttonLabel }: Props) => {
    return (
        <div className={styles.input}>
            <input className={styles.textInput} type="text" value={value} placeholder={placeholder} onChange={onChange} />
            {
                buttonLabel && <div className={styles.button} onClick={onAction}>{buttonLabel}</div>
            }
        </div>
    )
}