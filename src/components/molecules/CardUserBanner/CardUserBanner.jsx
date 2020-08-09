import React from 'react'
import styles from './CardUserBanner.module.scss'

export function CardUserBanner({ children }) {
  return (
    <div className={styles.CardUserBanner}>
      <div className={styles.CardUserBanner__info}>
        <div className={styles.CardUserBanner__img}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYYQl-Dux-cj6FuNnR4mEcq_Hq8fgrtH2jZA&usqp=CAU"
            alt="User"
          />
        </div>
        <div className={styles.CardUserBanner__user}>
          <p>@NameMentor</p>
        </div>
      </div>
      {children}
    </div>
  )
}
