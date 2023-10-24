import { describe, test, expect } from 'vitest'
import { screen } from '@testing-library/react'

import { Typography, type TypographyProps } from '.'
import { renderWithTheme } from '~/utils/render'
import { theme } from '~/themes'

type Font = Required<TypographyProps>['as']

describe('<Typography />', () => {
  const factory = (props?: TypographyProps) => {
    renderWithTheme(<Typography {...props} />)
  }

  test('should a render all titles type', () => {
    const titles = ['h1', 'h2', 'h3', 'h4', 'h5'] as Font[]
    titles.forEach((title) => {
      factory({
        as: title,
        children: title
      })
    })

    expect(screen.getAllByRole('heading')).toHaveLength(titles.length)

    titles.forEach((title) => {
      const element = screen.getByRole('heading', {
        name: title
      })
      const { lineHeight, size } = theme.typography[title]

      expect(element).toHaveTextContent(title)
      expect(element).toHaveStyle({
        'font-size': size,
        'line-height': lineHeight
      })
    })
  })

  test('should be able a render all texts types', () => {
    const texts = ['label', 'text', 'small'] as Font[]
    texts.forEach((text) => {
      factory({
        as: text,
        children: text
      })
    })

    expect(screen.getAllByTestId('typography')).toHaveLength(texts.length)

    texts.forEach((text) => {
      const element = screen.getByText(text)
      const { lineHeight, size } = theme.typography[text]

      expect(element).toBeInTheDocument()
      expect(element).toHaveStyle({
        'font-size': size,
        'line-height': lineHeight
      })
    })
  })

  test('should be able a render with all weight', () => {
    factory({
      semibold: true,
      children: 'semibold'
    })
    factory({
      bold: true,
      children: 'bold'
    })
    factory({
      children: 'regular'
    })

    expect(screen.getAllByTestId('typography')).toHaveLength(3)
    expect(screen.getByText('bold')).toHaveStyle({
      'font-weight': theme.fonts.default.styles.bold
    })
    expect(screen.getByText('regular')).toHaveStyle({
      'font-weight': theme.fonts.default.styles.regular
    })
    expect(screen.getByText('semibold')).toHaveStyle({
      'font-weight': theme.fonts.default.styles.semibold
    })
  })
})
