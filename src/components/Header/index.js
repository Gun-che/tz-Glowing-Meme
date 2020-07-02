import React from 'react'
import { NavLink } from 'react-router-dom'

import UserCard from '../UserCard'
import * as s from './index.module.scss'

export const Header = ({
  loggedIn,
  signIn,
  signOut,
  msg,
  authToken,
}) => {

  return (
    <header className={s.header + ' container'}>
      <div className={s.logo}>
        <h3>W</h3>
      </div>
      <ul>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
        <li>
          <NavLink to='/news'>news</NavLink>
        </li>
      </ul>
      <div className={s.user}>
        <div className={s.wrap}>
          {loggedIn && authToken && <UserCard authToken={authToken} />}
          {msg && <h3>ошибка авторизации, попробуйте снова{msg}</h3>}
        </div>
        {loggedIn && <button onClick={signOut}>Sign Out</button>}
        {!loggedIn && <button onClick={signIn}>Sign in</button>}
      </div>
    </header>
  )
}


