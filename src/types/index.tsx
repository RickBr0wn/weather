import { Dispatch, SetStateAction } from 'react'

type location = string

export type Day = {
  day: string
}

export type Days = Day[]

export type DataRowProps = { days: Days }

export interface LocationProps {
  location: location
  setLocation: Dispatch<React.SetStateAction<location>>
}

export interface NavbarProps {
  location: string
  setLocation: Dispatch<SetStateAction<string>>
}

export interface WeatherProps {
  weatherType: string
}

export interface DaysProps {
  days: Day[]
}
