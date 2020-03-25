import React from 'react'
import { CustomRouteProps } from '..'
import { useVolunteerContext } from '../../context/volunteer'
import { Route, Redirect } from 'react-router-dom'

export const VolunteerRoute = ({ component: Component, ...rest }: CustomRouteProps) => {
    const { isAuthenticated } = useVolunteerContext()

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                isAuthenticated ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: { from: routeProps.location }
                            }}
                        />
                    )
            }
        />
    )
}
