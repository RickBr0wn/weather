import React, { FC } from 'react'
import styled from 'styled-components'
import Clouds from '../images/cloudy.jpg'
import Clear from '../images/clear.jpg'
import Rain from '../images/rain.jpg'
import { Images, WeatherProps } from '../types'

const Image = styled.img`
  width: 100vw;
  height: calc(100vh - 6rem);
  background-color: blueviolet;
  z-index: 1;
`

const LocationDetails = styled.div`
  position: absolute;
  top: 10rem;
  left: 6rem;
`

const Location = styled.h1``

const CoordsText = styled.h3``

const images: Images = {
  Clouds: Clouds,
  Clear: Clear,
  Rain: Rain,
}

const ImageSection: FC<WeatherProps> = ({
  description,
  location,
  weatherType,
  coords,
}) => {
  const image = images[weatherType]

  return (
    <div>
      <LocationDetails>
        <Location>{location}</Location>
        <CoordsText>
          <p>{coords.lat}</p>
          <p>{coords.lon}</p>
        </CoordsText>
      </LocationDetails>

      <Image data-testid="image-section" src={image} alt={description} />
    </div>
  )
}

export default ImageSection
