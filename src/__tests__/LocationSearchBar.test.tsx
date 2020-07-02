import React from 'react'
import { render } from '@testing-library/react'
import LocationSearchBar from '../components/LocationSearchBar'

describe('<LocationSearchBar />', () => {
  it('should render a `location search bar', () => {
    const { getByTestId } = render(
      <LocationSearchBar location={''} setLocation={() => {}} />
    )
    expect(getByTestId('location-search-bar')).toBeInTheDocument()
  })
})
