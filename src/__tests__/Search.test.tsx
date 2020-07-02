import React from 'react'
import { render } from '@testing-library/react'
import Search from '../components/Search'

describe('<Search />', () => {
  it('should render a `location search bar', () => {
    const { getByTestId } = render(
      <Search location={''} setLocation={() => {}} />
    )
    expect(getByTestId('search-box')).toBeInTheDocument()
  })
})
