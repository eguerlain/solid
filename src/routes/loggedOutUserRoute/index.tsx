import React from 'react'
import { CustomRouteProps } from '..'
import { useVolunteerContext } from '../../context/volunteer'
import { Route, Redirect } from 'react-router-dom'

export const LoggedOutUserRoute = ({ component: Component, ...rest }: CustomRouteProps) => {
    const { isAuthenticated } = useVolunteerContext()
    // Not glorious here, but state as type History.PoorMansUnknown, really anoying
    // Maybe look at    https://medium.com/octopus-wealth/authenticated-routing-with-react-react-router-redux-typescript-677ed49d4bd6
    // or               https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71
    const state = rest.location ? rest.location.state : null
    const from = state ? (state as any).from : { pathname: '/volunteer' }

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                !isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={from}
                        />
                    )
            }
        />
    )
}
