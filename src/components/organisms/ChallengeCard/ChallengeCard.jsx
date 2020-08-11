import React from 'react'
import { CardUserBanner } from '../../molecules'
import styles from './ChallengeCard.module.scss'

export function ChallengeCard({
  challengeId,
  title,
  image,
  level,
  mentorInfo: { userId, avatar, username }
}) {
  return (
    <div className={styles.ChallengeCard}>
      <div className={styles.ChallengeCard__content}>
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className={styles['ChallengeCard__content--info']}>
          <h2>{title}</h2>
          <span>Level: {level}</span>
        </div>
        <h3>HTML | CSS | JS</h3>
      </div>
      <CardUserBanner
        userId={userId}
        avatar={avatar}
        username={username}
        challengeId={challengeId}
      />
    </div>
  )
}
