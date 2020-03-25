import React, { useState } from 'react'
import styles from './index.module.sass'
import { WarningModal } from '../warningModal'

export const WarningButton = () => {
    const WARNING_ICON = '⚠️'
    const [isWarningModalOpen, setIsWarningModalOpen] = useState<boolean>(false)
    return <>
        <div className={styles.warningButton} onClick={() => setIsWarningModalOpen(true)}><span role="img">{WARNING_ICON}</span></div>
        <WarningModal isOpen={isWarningModalOpen} closeModal={() => setIsWarningModalOpen(false)} />
    </>
}