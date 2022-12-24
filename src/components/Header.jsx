import React from 'react'
import { HeaderStyled, StyledImg, } from './headerStyle'

const Header = () => {
  return (
    <div>
        <StyledImg src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg" alt="Logo" />
        <HeaderStyled>Welcome to Clarusway</HeaderStyled>
    </div>
  )
}

export default Header