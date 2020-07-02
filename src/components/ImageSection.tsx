import React, { FC } from 'react'
import styled from 'styled-components'
import Cloudy from '../images/clear2.png'

import { WeatherProps } from '../types'

const Image = styled.img`
  width: 100vw;
  height: 100%;
  background-color: blueviolet;
  z-index: 1;
`

const ImageSection: FC<WeatherProps> = ({ weatherType }) => (
  <Image data-testid="image-section" src={Cloudy} alt="cloudy day" />
)

export default ImageSection
