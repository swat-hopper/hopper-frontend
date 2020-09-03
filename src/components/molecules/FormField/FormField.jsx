import React from 'react'
import styles from './FormField.module.scss'

export function FormField({ id, label, register, type }) {
  return (
    <div className={styles.FormField}>
      <label htmlFor={id}>{label}</label>
      <input name={id} id={id} type={type} ref={register} />
    </div>
  )
}
