import React, { FC } from 'react'
import styled from 'styled-components'
import Search from './Search'
import Target from './Target'
import { LocationProps } from '../types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 90rem;

  h1 {
    color: #ffffff;
    font-size: 3.6rem;
  }
`

const InputWrapper = styled.div`
  display: flex;
  height: 100%;
`

const LocationSearchBar: FC<LocationProps> = ({ location, setLocation }) => {
  return (
    <Wrapper data-testid="location-search-bar">
      <h1>WEATHER</h1>
      <InputWrapper>
        <Search location={location} setLocation={setLocation} />
        <Target />
      </InputWrapper>
    </Wrapper>
  )
}

export default LocationSearchBar
