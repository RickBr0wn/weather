import React from 'react'
import { render } from '@testing-library/react'
import ImageSection from '../components/ImageSection'

describe('<ImageSection />', () => {
  it('should render a `location search bar', () => {
    const { getByTestId } = render(<ImageSection />)

    expect(getByTestId('image-section')).toBeInTheDocument()
  })
})
