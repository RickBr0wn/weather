import React, { FC } from 'react'
import styled from 'styled-components'
import LocationSearchBar from './LocationSearchBar'
import { LocationProps } from '../types'

const NavBar = styled.nav`
  background-color: #067eb3;
  padding: 1rem;
  height: 6rem;
  display: flex;
  justify-content: center;
`

const Navbar: FC<LocationProps> = ({ location, setLocation }) => {
  return (
    <NavBar data-testid="weather-container">
      <LocationSearchBar location={location} setLocation={setLocation} />
    </NavBar>
  )
}

export default Navbar
