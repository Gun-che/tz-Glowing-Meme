import React from 'react'
import './App.scss'
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import HeaderContainer from '../../containers/HeaderContainer'

export const App = () => {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <Switch>
          <Route path='/' exact>home </Route>
          <Route path='/news' exact>news </Route>
          <Route path='/news/:newsId' exact>news id </Route>
          <Route path='/news/:newsId/edit' >news edit </Route>
          <Route path='/rep'>res </Route>
        </Switch>
      </div>
    </Router>
  )
}
