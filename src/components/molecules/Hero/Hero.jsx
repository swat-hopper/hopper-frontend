import React from 'react'
import styles from './Hero.module.scss'
import HeroImg from '../../../assets/images/HeroImg.svg'

export function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Hero__text}>
        <h1>Challenge your abilities</h1>
        <span>Join and learn with the greatest professionals in tech</span>
      </div>
      <figure>
        <img src={HeroImg} alt="HOPPER" />
      </figure>
    </div>
  )
}
