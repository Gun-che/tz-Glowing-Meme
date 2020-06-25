import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import * as s from './index.module.scss'

export const Header = ({ userData, loggedIn, signIn, signOut }) => {

  useEffect(() => {
    if (loggedIn && Object.keys(userData).length === 0) {
      window.onload = () => signIn()
      // debugger
    }
  }, [loggedIn, signIn, userData])

  const tmpCard = () => {
    return loggedIn && Object.keys(userData).length !== 0 && (<div className={s.card}>
      <div className={s.photo}>
        <img src={userData.getImageUrl()} alt="i" />
      </div>
      <div className={s.info}>
        <h3>
          {userData.getName()}
        </h3>
        <h4>
          {userData.getEmail()}
        </h4>
      </div>
    </div>)
  }

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
          {tmpCard()}
        </div>
        {loggedIn && <button onClick={signOut}>Sign Out</button>}
        {!loggedIn && <button onClick={signIn}>Sign in</button>}
      </div>
    </header>
  )
}


