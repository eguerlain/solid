import { VolunteerRoute } from './volunteerRoute'
import { LoggedOutUserRoute } from './loggedOutUserRoute'
import { RouteProps } from 'react-router-dom'

export interface CustomRouteProps extends RouteProps {
    // tslint:disable-next-line:no-any
    component: any;
}

export const Routes = {
    volunteer: VolunteerRoute,
    loggedOutUser: LoggedOutUserRoute,
}