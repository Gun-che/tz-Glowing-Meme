import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="App-header">
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
      <button>login</button>
    </header>
  )
}

