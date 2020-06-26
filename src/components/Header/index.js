import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as s from './index.module.scss'
import UserCard from '../UserCard'

export const Header = ({ userData, loggedIn, signIn, signOut }) => {

  useEffect(() => {
    if (loggedIn && Object.keys(userData).length === 0) {
      window.onload = () => signIn();
    }
  }, [loggedIn, signIn, userData])

  return (
    <header className={s.header}>
      <h3>header</h3>
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
        </div>
        {loggedIn && <button onClick={signOut}>Sign Out</button>}
        {!loggedIn && <button onClick={signIn}>Sign in</button>}
      </div>
    </header>
  )
}


