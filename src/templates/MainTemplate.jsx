import React from 'react'
import { NavBar } from '../components/organisms'

export function MainTemplate({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
