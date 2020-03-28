import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { addList, getLists } from '../../api/back'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Layout } from '../../ui/layout'
import { notify } from '../../ui/toast'
import { BackButton } from '../backButton'

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
    }, [t])

    const [newListTitle, setNewListTitle] = useState<string>('')

    return <Layout title={{ leftIcon: <BackButton to="volunteer" />, children: t('my-needs') }}>
        <p>{t('needs-explanations')}</p>

        {
            lists && lists.map(list => <Button
                key={list.id}
                linkTo={`lists/${list.id}`}
            >
                {list.title}
            </Button>)
        }

        <Input
            value={newListTitle}
            placeholder={t('new-list')}
            buttonLabel={t('add-new-list')}
            onChange={event => setNewListTitle(event.target.value)}
            onAction={async () => {
                try {
                    const newList = await addList(newListTitle)
                    setLists((lists || []).concat(newList))
                    setNewListTitle('')
                } catch (error) {
                    notify(t('could-not-post-new-list'))
                }
            }}
        />
    </Layout>
}