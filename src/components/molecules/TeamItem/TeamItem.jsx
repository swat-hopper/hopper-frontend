import React from 'react'
import styles from './TeamItem.module.scss'

export function TeamItem({ username, avatar }) {
  return (
    <div className={styles.TeamItem}>
      <figure>
        <img src={avatar} alt="" />
      </figure>
      <p>@{username}</p>
    </div>
  )
}
