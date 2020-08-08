import React from 'react'
import styles from './MenuButton.module.scss'

export function MenuButton({ children }) {
  return <button className={styles.MenuButton}>{children}</button>
}
