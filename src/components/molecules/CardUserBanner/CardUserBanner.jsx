import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../../atoms'
import styles from './CardUserBanner.module.scss'

export function CardUserBanner({
  /* userId,  */ avatar,
  username,
  challengeId
}) {
  const { push } = useHistory()

  function handleClick(event) {
    event.preventDefault()
    push(`challenge/${challengeId}`)
  }

  return (
    <div className={styles.CardUserBanner}>
      <div className={styles.CardUserBanner__info}>
        <div className={styles.CardUserBanner__img}>
          <img src={avatar} alt={username} />
        </div>
        <div className={styles.CardUserBanner__user}>
          <p>@{username}</p>
        </div>
      </div>
      <Button onClick={handleClick}>View Challenge</Button>
    </div>
  )
}
