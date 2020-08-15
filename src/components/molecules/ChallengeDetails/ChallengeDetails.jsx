import React from 'react'
import styles from './ChallengeDetails.module.scss'

export function ChallengeDetails({ description, tips }) {
  return (
    <section className={styles.ChallengeDetails}>
      <div className={styles.ChallengeDetails__details}>
        <h1>Challenge Details</h1>
        <p>{description}</p>
      </div>
      <div className={styles.ChallengeDetails__recommendations}>
        <h1>Recommendations | tips</h1>
        <ol>
          {tips.map((tip, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`recommendation-tip-${idx}`} value={idx + 1}>
              {tip}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
