import React from 'react'
import styles from './HomeText.module.scss'

export function HomeText() {
  return (
    <div className={styles.HomeText}>
      <div className={styles.HomeText__container}>
        <h1>¿What is Hopper?</h1>
        <p>
          Hopper is an Open Source initiative that seeks to challenge your
          programming skills in languages such as HTML, CSS and JS. You can
          develop challenges from the simplest to the most complex, allowing you
          to level up at your own pace and taste. In Hopper you will have the
          possibility to receive FeedBack of your code from experienced mentors
          on the web.
        </p>
        <span>Join and learn with the greatest professionals in tech.</span>
      </div>
    </div>
  )
}
