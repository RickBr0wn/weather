import React, { Fragment, useState, FC } from 'react'
import ImageSection from './ImageSection'
import Navbar from './Navbar'
import DaysList from './DaysList'
import { Day } from '../types'
import { useFetch } from '../services/useFetch'

const WeatherContainer: FC = (): JSX.Element | null => {
  const [location, setLocation] = useState<string>('')

  const coords = {
    lat: 51.146465,
    lng: 0.875019,
  }

  const [response, error, isLoading] = useFetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
  )

  const days: Array<Day> = [
    { day: 'Monday' },
    { day: 'Tuesday' },
    { day: 'Wednesday' },
    { day: 'Thursday' },
    { day: 'Friday' },
    { day: 'Saturday' },
    { day: 'Sunday' },
  ]

  if (error) {
    return <p>Oops! There has been an error!</p>
  }

  if (isLoading) {
    return <p>loading data</p>
  }

  if (response && response.data) {
    return (
      <div data-testid="weather-container">
        <Navbar location={location} setLocation={setLocation} />
        <ImageSection location={response.data.name} weatherType={'cloudy'} />
        <DaysList days={days} />
      </div>
    )
  }

  return null
}

export default WeatherContainer
