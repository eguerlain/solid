import React, { useState } from 'react'
import { Layout } from '../../ui/layout'
import { useTranslation } from 'react-i18next'
import { BackButton } from '../backButton'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { notify } from '../../ui/toast'
import { useVolunteerContext } from '../../context/volunteer'

export const SignupPage = () => {
    const { t } = useTranslation()
    const { signup: signupInContext } = useVolunteerContext()
    const setRedirectOnceLoggedIn = useState<boolean>(false)[1] // Just to trigger re-rendering

    const [firstname, setFirstname] = useState<string>('')
    const [lastname, setLastname] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')
    const [address, setAddress] = useState<string>('')

    const signup = async () => {
        if (password && password !== passwordConfirmation) {
            notify(t('passwords-not-matching'))
            return
        }
        if (
            firstname.trim()
            && lastname.trim()
            && phone.trim()
            && email.trim()
            && password
            && passwordConfirmation === password
            && address.trim()
        ) {
            try {
                await signupInContext({
                    firstname: firstname.trim(),
                    lastname: lastname.trim(),
                    phone: phone.trim(),
                    email: email.trim(),
                    password,
                    address: address.trim()
                })

                // TODO Store token somewhere
                setRedirectOnceLoggedIn(true)
            } catch (error) {
                notify(t('could-not-enroll'))
            }
        } else {
            notify(t('please-fill-entire-form'))
        }
    }

    return <Layout title={{ leftIcon: <BackButton to='/' />, children: t('signup-title') }}>
        <p>{t('signup-explanations')}</p>
        <Button linkTo='login' >{t('already-volunteer-button')}</Button>
        <p>{t('signup-explanations-2')}</p>
        <Input value={firstname} placeholder={t('firstname')} onChange={event => setFirstname(event.target.value)} />
        <Input value={lastname} placeholder={t('lastname')} onChange={event => setLastname(event.target.value)} />
        <Input value={phone} placeholder={t('phone')} onChange={event => setPhone(event.target.value)} />
        <Input value={email} placeholder={t('email')} onChange={event => setEmail(event.target.value)} />
        <Input value={password} placeholder={t('password')} type='password' onChange={event => setPassword(event.target.value)} />
        <Input value={passwordConfirmation} placeholder={t('password-confirmation')} type='password' onChange={event => setPasswordConfirmation(event.target.value)} />
        <Input value={address} placeholder={t('address')} buttonLabel={t('locate-me')} onChange={event => setAddress(event.target.value)} />
        <Button onClick={signup}>OK</Button>
    </Layout>
}