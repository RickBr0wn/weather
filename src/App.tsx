import React from 'react'
import WeatherContainer from './components/WeatherContainer'

const App: React.FC = () => {
  return (
    <div data-testid="app">
      <WeatherContainer />
    </div>
  )
}

export default App
