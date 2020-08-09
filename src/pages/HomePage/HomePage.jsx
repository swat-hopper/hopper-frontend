import React from 'react'
import { MainTemplate } from '../../templates'
import styles from './HomePage.module.scss'
import challengesData from './challengesMockData.json'
import { ChallengeCard } from '../../components/organisms'

export function HomePage() {
  return (
    <MainTemplate>
      <div className={styles.HomePage}>
        <h1>This is the home page</h1>
        <section className={styles['HomePage__popular-challenges']}>
          <div className={styles['HomePage__popular-challenges--container']}>
            <h1>Popular challenges</h1>
            <div className={styles['HomePage__popular-challenges--grid']}>
              {challengesData.map(challenge => (
                <ChallengeCard
                  key={challenge.challengeId}
                  challengeId={challenge.challengeId}
                  title={challenge.title}
                  image={challenge.image}
                  level={challenge.level}
                  mentorInfo={challenge.mentorInfo}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainTemplate>
  )
}
