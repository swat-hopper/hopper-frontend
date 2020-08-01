import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route exact path='/challenge'>
          <h1>Challenge List</h1>
        </Route>
        <Route exact path='/challenge/:challengeId'>
          <h1>Single Challenge</h1>
        </Route>
        <Route exact path='/profile'>
          <h1>Profile</h1>
        </Route>
        <Route exact path='/teacher'>
          <h1>Teacher</h1>
        </Route>
        <Route exact path='/teacher/challenge/:challengeId'>
          <h1>Teacher individual challenge</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
