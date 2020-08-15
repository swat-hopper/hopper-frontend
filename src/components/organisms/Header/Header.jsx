import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../molecules'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.Header__container}>
        <figure>
          <h1>
            <Link to="/">Hopper</Link>
          </h1>
        </figure>
        <NavBar />
      </div>
    </header>
  )
}
