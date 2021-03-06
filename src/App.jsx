import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  HomePage,
  ChallengeListPage,
  ProfilePage,
  ChallengeDetailsPage
} from './pages'
import './scss/global.scss'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/challenge" component={ChallengeListPage} />
        <Route exact path="/challenge/:challengeId">
          <ChallengeDetailsPage />
        </Route>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/teacher">
          <h1>Teacher</h1>
        </Route>
        <Route exact path="/teacher/challenge/:challengeId">
          <h1>Teacher individual challenge</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
