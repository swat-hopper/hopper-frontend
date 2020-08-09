import React from 'react'
import { CardUserBanner } from '../../molecules'
import styles from './ChallengeCard.module.scss'

export function ChallengeCard() {
  return (
    <div className={styles.ChallengeCard}>
      <div className={styles.ChallengeCard__content}>
        <figure>
          <img
            src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/jve24exh4iwonznfndfc.jpg"
            alt="ChallengeCard"
          />
        </figure>
        <div className={styles['ChallengeCard__content--info']}>
          <h2>Aweasome Title</h2>
          <span>Level: Intermediate</span>
          {/* {children} */}
        </div>
        <h3>HTML | CSS | JS</h3>
      </div>
      <CardUserBanner />
    </div>
  )
}
