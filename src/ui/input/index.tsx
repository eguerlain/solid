import React, { ChangeEvent } from 'react'
import styles from './index.module.sass'
import classnames from 'classnames'

interface Props {
    value: string,
    placeholder: string,
    type?: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onAction?: () => void,
    buttonLabel?: string,
    reference?: string | ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined
}

export const Input = ({ value, placeholder, onAction, onChange, buttonLabel, type, reference }: Props) => {
    const act = () => {
        if (value.trim()) { // Perform action only if text is not empty or just space
            onAction && onAction()
        }
    }
    return (
        <div className={styles.input}>
            <input
                ref={reference}
                className={classnames(styles.textInput, {
                    [styles.fullTextInput]: !buttonLabel
                })}
                type={type || 'text'}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        act()
                    }
                }}
            />
            {
                buttonLabel && <div className={styles.button} onClick={act}>{buttonLabel}</div>
            }
        </div>
    )
}