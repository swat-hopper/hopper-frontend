import React from 'react'
import { Header, Footer } from '../components/organisms'

export function MainTemplate({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
