import React, { FC } from 'react'
import styled from 'styled-components'
import { DaysProps } from '../types/index'

const DaysContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(7, 1fr);

  margin-top: -4px;
`

const Day = styled.div`
  height: 12rem;
  border-top: 10px solid transparent;
  border-bottom: 10px solid orangered;
  display: border-box;
  padding: 8px;

  &:hover {
    border-top: 10px solid orangered;
    border-bottom: 10px solid transparent;
  }
`

const DaysList: FC<DaysProps> = ({ days }) => {
  return (
    <DaysContainer>
      {days.map(({ day }) => (
        <Day>{day}</Day>
      ))}
    </DaysContainer>
  )
}

export default DaysList
