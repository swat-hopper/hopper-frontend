import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <header>
      <figure>
        <h1>Hopper</h1>
      </figure>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/challenge">Challenges</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
