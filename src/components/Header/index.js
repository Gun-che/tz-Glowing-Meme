import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import UserCard from '../UserCard'
import * as s from './index.module.scss'

export const Header = ({
  userData,
  loggedIn,
  signIn,
  signOut,
  msg,
}) => {

  useEffect(() => {

    if (loggedIn && Object.keys(userData).length === 0) {
      window.onload = () => signIn();
    }
  }, [loggedIn, signIn, userData])

  return (
    <header className={s.header}>
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
        <li>
          <NavLink to='/rep'>res</NavLink>
        </li>
      </ul>
      <div className={s.user}>
        <div className={s.wrap}>
          {loggedIn && Object.keys(userData).length !== 0 && <UserCard userData={userData} />}
          {msg && <h3>ошибка авторизации, попробуйте снова{msg}</h3>}
        </div>
        {loggedIn && <button onClick={signOut}>Sign Out</button>}
        {!loggedIn && <button onClick={signIn}>Sign in</button>}
      </div>
    </header>
  )
}


