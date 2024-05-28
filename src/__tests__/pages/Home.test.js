import { render, screen } from '@testing-library/react'

import Home from '../../pages/Home'

test('renders home page', () => {
  render(<Home/>)
  expect(screen.getByText(/Take Home Exercise Client/i)).toBeInTheDocument()
})
