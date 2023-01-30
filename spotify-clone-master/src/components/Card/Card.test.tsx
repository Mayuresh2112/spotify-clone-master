import { render, screen } from '@testing-library/react'
import ICard from './index'

test('should render track, artist', () => {
  render(
    <ICard
      title="Mayuresh Nehe"
      artist="Mayuresh"
      thumbnail="https://i.scdn.co/image/ab67616d0000b2732887f8c05b5a9f1cb105be29" id={0}    />
  )
  screen.getByText(/White Bronco/)
  screen.getByText(/Action Bronson/)
  expect(screen.getByTestId('card-thumbnail')).toHaveStyle(
    'background-image: url(https://i.scdn.co/image/ab67616d0000b2732887f8c05b5a9f1cb105be29)'
  )
})
