import React, { FC } from 'react'
import styled from 'styled-components'
import { DataProps } from '../types'

const DataContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Icon = styled.div``

const Description = styled.h1``

const DataSection: FC<DataProps> = ({ icon, description }) => {
  return (
    <DataContainer>
      <Description>{description}</Description>
      <Icon>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
        />
      </Icon>
    </DataContainer>
  )
}

export default DataSection
