import styled, { type DefaultTheme, css } from 'styled-components'
import { baseShimmer } from '../Shimmer'

type WrapperProps = {
  typography: keyof DefaultTheme['typography']
  color: keyof DefaultTheme['colors']
  weight: keyof DefaultTheme['fonts']['default']['styles']
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, color, typography, weight }) => css`
    position: relative;

    &,
    & > ${Text} {
      color: ${theme.colors[color]};
      font-size: ${theme.typography[typography].size};
      line-height: ${theme.typography[typography].lineHeight};
      font-weight: ${theme.fonts.default.styles[weight]};
    }

    &[data-loading='true'] {
      & > span.loading {
        position: absolute;
        right: 0;
        top: 0;
        display: inline-block;
        width: 100%;
        height: ${theme.typography[typography].size};
        ${baseShimmer(theme)}
      }

      & > ${Text}:first-child {
        visibility: hidden;
      }
    }
    &[data-loading='false'] {
      & > span.loading {
        display: none;
      }
    }
  `}
`

export const Text = styled.p``
