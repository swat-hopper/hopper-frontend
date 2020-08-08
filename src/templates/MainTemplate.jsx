import React from 'react'
import { Header } from '../components/organisms'

export function MainTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
