import React from 'react'
import { render } from '@testing-library/react'
import Target from '../components/Target'

describe('<Target />', () => {
  it('should render a `location search bar', () => {
    const { getByTestId } = render(<Target />)
    expect(getByTestId('target')).toBeInTheDocument()
  })
})
