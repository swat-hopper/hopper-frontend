import React from 'react'
// import style from './Icon.module.scss'

export function Icon({ className, color, size }) {
  return <i className={className} style={{ color, fontSize: size }} />
}
