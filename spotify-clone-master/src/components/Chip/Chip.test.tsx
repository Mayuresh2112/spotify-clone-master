import {render, screen} from '@testing-library/react'
import Chip from './index'

test('should render title and image', () => {
  render(<Chip thumbnail="https://hindikhabar.com/wp-content/uploads/2022/04/arijit-singh.jpg">Arjit Singh (Singh)</Chip>)
  screen.getByText(/Arjit Singh \(Singh\)/)
  expect(screen.getByTestId('chip-thumbnail')).toHaveStyle('background-image: url(https://hindikhabar.com/wp-content/uploads/2022/04/arijit-singh.jpg)')
})
