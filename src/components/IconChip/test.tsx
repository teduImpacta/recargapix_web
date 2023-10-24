import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { IconChip, type IconChipProps } from '.'
import { renderWithTheme } from '~/utils/render'
import { cardTheme, theme } from '~/themes'

describe('<IconChip />', () => {
  const factory = (props: IconChipProps) => {
    renderWithTheme(<IconChip {...props} />)
  }

  test('should a render with basic properties', () => {
    factory({
      icon: 'logo',
      label: 'Test'
    })

    const text = screen.getByText('Test')

    expect(text).toBeInTheDocument()
    expect(screen.getByTestId('icon_chip')).toHaveStyle({
      border: `0.15rem solid ${theme.colors.gray1}`
    })
  })

  test('should a render with small width in small screens', () => {
    factory({
      icon: 'logo',
      label: 'Test'
    })

    expect(screen.getByTestId('icon_chip')).toHaveStyleRule('width', '10rem', {
      media: '(max-width: 768px)'
    })
  })

  test('should be able a render with primary border color', () => {
    factory({
      icon: 'logo',
      label: 'Test',
      borderColor: 'primary300'
    })
    expect(screen.getByTestId('icon_chip')).toHaveStyle({
      border: `0.15rem solid ${cardTheme.colors.primary300}`
    })
  })
})
