import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useVolunteerContext } from '../../context/volunteer'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Layout } from '../../ui/layout'
import { notify } from '../../ui/toast'
import { BackButton } from '../backButton'

export const LoginPage = () => {
    const { t } = useTranslation()
    const setRedirectToReferrer = useState<boolean>(false)[1]
    const { login: logInContext } = useVolunteerContext()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const passwordInput = useRef<HTMLInputElement>(null)

    const login = async () => {
        if (username && password) {
            try {
                await logInContext(username, password)
                setRedirectToReferrer(true) // Just to trigger re-rendering
            } catch (err) {
                notify(t('wrong-login-credentials'))
            }
        }
    }

    // At first rendering of the Login component, threre is no redirection
    // Once the user has logged in, the property is turned to true, causing re-render
    // With the re-render, redirection to the referrer (previous page) occurs
    // The 'from' object falls back to the homepage if it could not retrieve value from useLocation().state

    // Commenting this section, because the LoginPage component is used in a LoggedOutUserRoute.
    // When re-rendering, the following code is not reached, because the upper route redirects to /volunteer => changing the login function to redirect where it should
    // if (redirectToReferrer) {
    //     return <Redirect to={from} />
    // }

    return <Layout title={{ leftIcon: <BackButton to="/" />, children: t('login') }}>
        <Input
            value={username}
            placeholder={t('username-placeholder')}
            onChange={event => setUsername(event.target.value)}
            onAction={() => {
                if (passwordInput.current) {
                    passwordInput.current.focus()
                }
            }}
        />
        <Input
            value={password}
            placeholder={t('password-placeholder')}
            onChange={event => setPassword(event.target.value)}
            type='password'
            onAction={login}
            reference={passwordInput}
        />
        <Button onClick={login}>{t('login')}</Button>
        <Button>{t('forgotten-password')}</Button>
    </Layout>
}