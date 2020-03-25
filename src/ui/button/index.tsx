import React from 'react'
import styles from './index.module.sass'
import { Link } from 'react-router-dom'
import { Color } from '../style'
import classnames from 'classnames'

interface Props {
    children: string;
    color?: string;
    backgroundColor?: Color;
    onClick?: () => void;
    linkTo?: string;
    leftIcon?: string;
    onLeftIconClick?: () => void;
    rightIcon?: string;
    onRightIconClick?: () => void;
}

export const Button = ({ children, color, backgroundColor, onClick, linkTo, leftIcon, onLeftIconClick, rightIcon, onRightIconClick }: Props) => {
    const button = (
        <div
            className={styles.button}
            style={{
                color: color || Color.black,
                backgroundColor: backgroundColor || Color.lightGrey
            }}
            onClick={onClick}
        >
            {leftIcon
                && <div
                    className={styles.left}
                    onClick={e => {
                        if (onLeftIconClick) {
                            e.stopPropagation()
                            onLeftIconClick()
                        }
                    }}
                >{leftIcon}</div>}
            <div className={classnames(styles.main, {
                [styles.center]: !rightIcon,
                [styles.alignLeft]: !!rightIcon,
            })}>{children}</div>
            {rightIcon
                && <div
                    className={styles.right}
                    onClick={e => {
                        if (onRightIconClick) {
                            e.stopPropagation()
                            onRightIconClick()
                        }
                    }}
                >{rightIcon}</div>}
        </div>
    )
    return (
        linkTo
            ? <Link to={linkTo}>{button}</Link>
            : button
    )
}