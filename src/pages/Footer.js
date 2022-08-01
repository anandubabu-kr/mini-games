import React from 'react'
import { FooterContainer } from '../design/main'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <FooterContainer>
      <NavLink to='/'>Back to Home</NavLink>
    </FooterContainer>
  )
}
