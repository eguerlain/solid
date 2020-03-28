import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../ui/layout'
import { BackButton } from '../backButton'
import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { List, Item, getList, addItemToList, removeItemFromList } from '../../api/back'
import { notify } from '../../ui/toast'
import Modal from 'react-modal'
import styles from './index.module.sass'

export const ListDetailsPage = () => {
    const { id } = useParams()
    const { t } = useTranslation()
    const [list, setList] = useState<List>()
    const [newItemTitle, setNewItemTitle] = useState<string>('')
    const [isRemoveItemModalOpen, setIsRemoveItemModalOpen] = useState<boolean>(false)
    const [itemToDelete, setItemToDelete] = useState<Item | null>(null)
    const [newItemQuantity, setNewItemQuantity] = useState<number>(1)

    const incrementQuantity = () => setNewItemQuantity(newItemQuantity + 1)
    const decrementQuantity = () => setNewItemQuantity(newItemQuantity > 1 ? newItemQuantity - 1 : 1)

    const askForDeletionOf = (item: Item) => {
        setItemToDelete(item)
        openRemoveItemModal()
    }

    const openRemoveItemModal = () => {
        setIsRemoveItemModalOpen(true)
    }

    const closeRemoveItemModal = () => {
        setIsRemoveItemModalOpen(false)
    }

    const removeItem = async (item: Item) => {
        if (list) {
            console.log("called")
            try {
                await removeItemFromList(item.id, list)
                setList({
                    ...list,
                    items: list.items.filter(i => i.id !== item.id)
                })
            } catch (error) {
                notify(t('could-not-remove-item'))
            }
        }
    }

    useEffect(() => {
        const fetchList = async () => {
            if (id) {
                try {
                    const APIList = await getList(id)
                    setList(APIList)
                } catch (err) {
                    notify(t('fetch-data-error'))
                }
            }
        }

        fetchList()
    }, [t, id])

    return <Layout title={{ children: list ? list.title : t('list-not-found'), leftIcon: <BackButton to='/lists' /> }}>
        <p>{t('list-details-explanations')}</p>
        {
            list && <>
                <p>List for id {id}</p>
                {
                    list.items.map(item => <Button
                        key={item.title}
                        leftIcon={item.boughtBy ? '✅' : '⬜️'}
                        rightIcon='❌'
                        onRightIconClick={() => { askForDeletionOf(item) }}
                    >{`${item.quantity} - ${item.title}`}</Button>)
                }
                <div className={styles.quantityInput}>
                    <div className={styles.quantitySelector}>
                        <div className={styles.button} onClick={decrementQuantity}>-</div>
                        <div className={styles.quantity}>{newItemQuantity}</div>
                        <div className={styles.button} onClick={incrementQuantity}>+</div>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Input
                            value={newItemTitle}
                            placeholder={t('new-item')}
                            buttonLabel={t('add-new-item')}
                            onChange={event => setNewItemTitle(event.target.value)}
                            onAction={async () => {
                                try {
                                    const newItem = await addItemToList({
                                        title: newItemTitle,
                                        quantity: newItemQuantity,
                                    }, list)
                                    setNewItemTitle('')
                                    setNewItemQuantity(1)
                                    setList({
                                        ...list,
                                        items: list.items.concat(newItem)
                                    })

                                } catch (err) { notify(t('new-item-error')) }
                            }} />
                    </div>
                </div>
            </>
        }
        {
            !list && <p>{t('not-list-found-for-id')}</p>
        }

        <Modal
            isOpen={isRemoveItemModalOpen}
            onRequestClose={closeRemoveItemModal}
            contentLabel={t('item-deletion')}
        >
            <p>{t('are-you-sure-to-remove-item')} {itemToDelete && `${itemToDelete.title} (${itemToDelete.quantity})`}</p>
            <Button onClick={() => {
                if (itemToDelete) {
                    removeItem(itemToDelete)
                    setItemToDelete(null)
                }
                closeRemoveItemModal()
            }}>{t('DELETE')}</Button>
            <Button
                onClick={() => {
                    closeRemoveItemModal()
                }}
            >{t('CANCEL')}</Button>
        </Modal>
    </Layout>
}