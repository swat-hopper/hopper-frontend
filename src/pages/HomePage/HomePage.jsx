import React from 'react'
import { MainTemplate } from '../../templates'
import styles from './HomePage.module.scss'
import challengesData from './challengesMockData.json'
import { ChallengeCard } from '../../components/organisms'
import teamMockData from './teamMockData.json'
import { TeamItem } from '../../components/molecules'

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
        <section className={styles['HomePage__creative-team']}>
          <div className={styles['HomePage__creative-team--container']}>
            <h1>Creative Team</h1>
            <div className={styles['HomePage__creative-team--grid']}>
              {teamMockData.map(user => (
                <TeamItem
                  key={user.userId}
                  username={user.username}
                  avatar={user.avatar}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainTemplate>
  )
}
