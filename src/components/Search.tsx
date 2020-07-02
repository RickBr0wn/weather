import React, { ChangeEvent, FC } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { LocationProps } from '../types'

const Input = styled.input`
  min-width: 60rem;
  font-size: 2rem;
  padding-left: 1rem;
  height: 100%;
`

const SearchBox = styled.div`
  position: relative;
  cursor: pointer;
`

const Icon = styled.div`
  position: absolute;
  top: 6px;
  right: 1.6rem;
  font-size: 2.8rem;
`

const Search: FC<LocationProps> = ({ location, setLocation }) => {
  return (
    <SearchBox>
      <Input
        data-testid="search-box"
        type="text"
        placeholder="Enter a town, city or UK postcode"
        value={location}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setLocation(e.target.value)
        }
      />
      <Icon>
        <FaSearch />
      </Icon>
    </SearchBox>
  )
}

export default Search
