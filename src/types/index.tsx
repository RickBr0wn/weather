import { Dispatch, SetStateAction } from 'react'

type location = string

export type Day = {
  day: string
}

export type Days = Day[]

export type DataRowProps = { days: Days }

export interface LocationProps {
  location: location | undefined
  setLocation: Dispatch<SetStateAction<location>>
}

export interface NavbarProps {
  location: string
  setLocation: Dispatch<SetStateAction<string>>
}

export interface WeatherProps {
  weatherType: string
  location: string | undefined
}

export interface DaysProps {
  days: Day[]
}

export type MountedRef = boolean

export interface Weather {
  data: Object
  base: string
  clouds: Clouds
  cod: number
  coord: Clouds
  dt: number
  id: number
  name: string
  // main: {temp: 17.99, feels_like: 17.27, temp_min: 16.67, temp_max: 18.89, pressure: 1012, …}
  // sys: {type: 3, id: 2002488, country: "GB", sunrise: 1594266743, sunset: 1594325442}
  // timezone: 3600
  // weather: [Object] (1)
  // wind: {speed: 2.68, deg: 233, gust: 3.58}
}

export interface IResponse {
  end?: string
  status?: number
  error?: boolean
  primitive?: string
  length?: number
  data?: Weather
}

export type IError = boolean

export type IsLoading = boolean

interface Clouds {
  all: number
}

interface Coords {
  lon: number
  lat: number
}
