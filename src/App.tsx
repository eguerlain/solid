import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Pages } from './business/pages'
import { GlobalContextProvider } from './context/global'
import { VolunteerContextProvider } from './context/volunteer'
import { Routes } from './routes'
import './translation/i18n'

export const App = () => {
  return (
    <GlobalContextProvider>
      <VolunteerContextProvider>
        <Router>
          <Switch>
            <Routes.volunteer path="/volunteer" exact component={Pages.volunteer} />

            <Routes.volunteer path="/lists/:id" exact component={Pages.listDetails} />

            <Routes.volunteer path="/lists" exact component={Pages.lists} />

            <Routes.volunteer path="/parameters" exact component={Pages.parameters} />

            <Route path="/location" exact component={Pages.location} />

            <Route path="/orders" exact component={Pages.orders} />

            <Routes.loggedOutUser path="/signup" exact component={Pages.signup} />

            <Routes.loggedOutUser path="/login" exact component={Pages.login} />

            <Route path="/cgu" exact component={Pages.eula} />

            <Route path="/" component={Pages.home} />
          </Switch>
        </Router>
      </VolunteerContextProvider>
    </GlobalContextProvider>
  )
}
