import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'

export function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <ul className={styles['NavBar__menu-list']}>
        <li className={styles['NavBar__menu-list--list-item']}>
          <NavLink to="/" exact activeClassName="NavBar--active">
            Home
          </NavLink>
        </li>
        <li className={styles['NavBar__menu-list--list-item']}>
          <NavLink to="/challenge" activeClassName="NavBar--active">
            Challenges
          </NavLink>
        </li>
        <li className={styles['NavBar__menu-list--list-item']}>
          <NavLink to="/profile" activeClassName="NavBar--active">
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
