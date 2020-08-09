import React from 'react'
import styles from './Button.module.scss'

export function Button({ children, onClick }) {
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  )
}
