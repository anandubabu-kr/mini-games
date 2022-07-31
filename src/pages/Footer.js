import React from 'react'
import { Container } from '../design/main'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <Container>
      <NavLink to='/'>Back to Home</NavLink>
    </Container>
  )
}
