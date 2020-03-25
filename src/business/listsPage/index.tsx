import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Layout } from '../../ui/layout'
import { BackButton } from '../backButton'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { v4 } from 'uuid'
import { notify } from '../../ui/toast'
import { getLists } from '../../api/back'

export const ListsPage = () => {
    const { t } = useTranslation()
    const [lists, setLists] = useState<{ title: string, id: string }[]>()

    useEffect(() => {
        const fetchLists = async () => {
            try {
                const APILists = await getLists()
                setLists(APILists)
            } catch (err) {
                notify(t('could-not-get-data'))
            }
        }

        fetchLists()
    }, [lists, setLists])

    // TODO Contact back if no list in context
    // No need to contact back if there is something, granted

    const [newListTitle, setNewListTitle] = useState<string>('')

    return <Layout title={{ leftIcon: <BackButton to="volunteer" />, children: t('my-needs') }}>
        <p>{t('needs-explanations')}</p>

        {
            // lists.map(list => <Button key={list.id} linkTo={`lists/${list.id}`}>
            //     {list.title}
            // </Button>)
        }

        <Input
            value={newListTitle}
            placeholder={t('new-list')}
            buttonLabel={t('add-new-list')}
            onChange={event => setNewListTitle(event.target.value)}
            onAction={() => {
                // TODO contact the back to add a list
                // Get the id back
                // addList({
                //     title: newListTitle,
                //     id: v4(),
                //     items: []
                // })
                setNewListTitle('')
            }}
        />
    </Layout>
}