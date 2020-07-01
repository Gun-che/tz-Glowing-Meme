import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom'
import loadable from '@loadable/component'
import { CSSTransition } from 'react-transition-group'

import HeaderContainer from '../../containers/HeaderContainer'
import { LoadingConst } from '../LoadingComponent'
import './App.scss'
import ErrorPage from '../ErrorPage'


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

const NotFound = loadable(() => import('../NotFound'), {
  fallback: LoadingConst
})

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/news', name: 'News', Component: News },
  { path: '/news/create', name: 'CreateNews', Component: CreateNews },
  { path: '/news/:newsId', name: 'NewsItem', Component: NewsItem },
  { path: '/news/:newsId/edit', name: 'NewsEdit', Component: NewsEdit },
  { path: '/*', name: 'NotFound', Component: NotFound },
]

export const App = () => {


  return (
    <Router>
      <div className="App">
        <HeaderContainer />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {() => (
                <Component />
              )}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  )
}

