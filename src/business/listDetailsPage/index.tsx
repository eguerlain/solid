import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../ui/layout'
import { BackButton } from '../backButton'
import { useTranslation } from 'react-i18next'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { v4 } from 'uuid'
import { List, getList, addItemToList } from '../../api/back'
import { notify } from '../../ui/toast'

export const ListDetailsPage = () => {
    const { id } = useParams()
    const { t } = useTranslation()
    const [list, setList] = useState<List>()
    const [newItemTitle, setNewItemTitle] = useState<string>('')

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
    }, [list, setList])

    return <Layout title={{ children: list ? list.title : t('list-not-found'), leftIcon: <BackButton to='/lists' /> }}>
        <p>{t('list-details-explanations')}</p>
        {
            list && <>
                <p>List for id {id}</p>
                {
                    list.items.map(item => <Button key={item.title}>{`${item.title} X ${item.quantity}`}</Button>)
                }
                <Input
                    value={newItemTitle}
                    placeholder={t('new-item')}
                    buttonLabel={t('add-new-item')}
                    onChange={event => setNewItemTitle(event.target.value)}
                    onAction={async () => {
                        try {
                            const newItem = await addItemToList({
                                title: newItemTitle,
                                quantity: 1,
                            }, list)
                            setNewItemTitle('')
                            // TODO Add to list items

                        } catch (err) { notify(t('new-item-error')) }
                    }} />
            </>
        }
        {
            !list && <p>{t('not-list-found-for-id')}</p>
        }
    </Layout>
}