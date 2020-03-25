import React from 'react'
import { useGlobalContext } from '../../context/global'
import styles from './index.module.sass'

enum NEXT_LANG_FLAG {
    en = '🇫🇷',
    fr = '🇬🇧',
}

export const LanguageToggleButton = () => {
    const { language, toggleLanguage } = useGlobalContext()

    return (
        <div className={styles.languageToggleButton} onClick={toggleLanguage}>
            {NEXT_LANG_FLAG[language]}
        </div>
    )
}