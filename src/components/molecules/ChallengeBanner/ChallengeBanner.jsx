import React from 'react'
import styles from './ChallengeBanner.module.scss'
import { Button } from '../../atoms'

export function ChallengeBanner({
  title,
  level,
  technologies,
  imageUrl,
  onAcceptClick
}) {
  return (
    <section className={styles.ChallengeBanner}>
      <figure className={styles.ChallengeBanner__image}>
        <img src={imageUrl} alt={title} />
      </figure>
      <aside className={styles.ChallengeBanner__info}>
        <div className={styles['ChallengeBanner__info--details']}>
          <p>{technologies.join(' ')}</p>
          <h1>{title}</h1>
          <h3>Level: {level}</h3>
        </div>
        <Button onClick={onAcceptClick}>Accept Challenge</Button>
      </aside>
    </section>
  )
}
