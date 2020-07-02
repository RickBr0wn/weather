import React, { Fragment, useState } from 'react'
import ImageSection from './ImageSection'
import Navbar from './Navbar'
import DaysList from './DaysList'
import { Day } from '../types'

// `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&APPID=${WEATHER_API_KEY}&units=metric`

const WeatherContainer: React.FC = () => {
  const [location, setLocation] = useState<string>('')

  const days: Array<Day> = [
    { day: 'Monday' },
    { day: 'Tuesday' },
    { day: 'Wednesday' },
    { day: 'Thursday' },
    { day: 'Friday' },
    { day: 'Saturday' },
    { day: 'Sunday' },
  ]

  return (
    <Fragment>
      <Navbar location={location} setLocation={setLocation} />
      <ImageSection weatherType={'cloudy'} />
      <DaysList days={days} />
    </Fragment>
  )
}

export default WeatherContainer
