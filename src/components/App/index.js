import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import loadable from '@loadable/component'

import HeaderContainer from '../../containers/HeaderContainer'
import { LoadingConst } from '../LoadingComponent/LoadingComponent'
import './App.scss'


export const App = () => {


  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/news' exact>
            <News />
          </Route>
          <Route path='/news/create' exact>
            <CreateNews />
          </Route>
          <Route path='/news/:newsId' exact>
            <NewsItem />
          </Route>
          <Route path='/news/:newsId/edit' >
            <NewsEdit />
          </Route>
          <Route path='/*' >
            <NotFound />
          </Route>
          <Route path='/rep'>res </Route>
        </Switch>
      </div>
    </Router>
  )
}

const Home = loadable(() => import('../Home'), {
  fallback: LoadingConst
})

const News = loadable(() => import('../../containers/NewsContainer'), {
  fallback: LoadingConst
})

const NewsEdit = loadable(() => import('../../containers/EditNewsContainer'), {
  fallback: LoadingConst
})

const NewsItem = loadable(() => import('../../containers/NewsItemContainer'), {
  fallback: LoadingConst
})

const CreateNews = loadable(() => import('../../containers/CreateNewsContainer'), {
  fallback: LoadingConst
})

const NotFound = loadable(() => import('../NotFound/NotFound'), {
  fallback: LoadingConst
})
