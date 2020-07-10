import React, { useState, FC } from 'react'
import ImageSection from './ImageSection'
import Navbar from './Navbar'
import DataSection from './DataSection'
import { useFetch } from '../services/useFetch'
import capitalizeFirstLetter from '../services/capitalizeFirstLetter'

const WeatherContainer: FC = (): JSX.Element | null => {
  const [location, setLocation] = useState<string>('')

  const coords = {
    lat: 51.146465,
    lng: 0.875019,
  }

  const [response, error, isLoading] = useFetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  )

  if (error) {
    return <p>Oops! There has been an error!</p>
  }

  if (isLoading) {
    return <p>loading data</p>
  }

  if (response && response.data) {
    const { data } = response

    console.log(data)

    return (
      <div data-testid="weather-container">
        <Navbar location={location} setLocation={setLocation} />
        <ImageSection
          description={data.weather[0].description}
          location={data.name}
          weatherType={data.weather[0].main}
          coords={data.coord}
        />
        <DataSection
          description={capitalizeFirstLetter(data.weather[0].description)}
          icon={data.weather[0].icon}
        />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  }

  return null
}

export default WeatherContainer
