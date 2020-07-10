import { Dispatch, SetStateAction } from 'react'

type location = string

interface Clouds {
  all: number
}

interface Coords {
  lon: number
  lat: number
}

interface Main {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}

interface Wind {
  speed: number
  deg: number
  gust: number
}

interface WeatherItem {
  description: string
  icon: string
  id: number
  main: string
}

export interface DataProps {
  description: string
  icon: string
}

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
  description?: string
  coords: Coords
}

export type MountedRef = boolean

export interface Weather {
  data: Object
  base: string
  clouds: Clouds
  cod: number
  coord: Coords
  dt: number
  id: number
  name: string
  main: Main
  sys: Sys
  timezone: number
  weather: WeatherItem[]
  wind: Wind
}

export interface IResponse {
  data?: Weather
}

export type IError = boolean

export type IsLoading = boolean

export interface Images {
  [key: string]: string
}
