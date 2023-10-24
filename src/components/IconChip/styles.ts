import styled, { type DefaultTheme, css } from 'styled-components'
import media from 'styled-media-query'
import { setTypography } from '~/utils'
import { Shimmer } from '../Shimmer'

type Color = keyof DefaultTheme['colors']

const wrapperModifiers = {
  chip: (theme: DefaultTheme, borderColor: Color) => css`
    width: 8rem;
    padding: ${theme.spacings[2]};
    flex-direction: column;
    text-align: center;
    border: 0.15rem solid ${theme.colors[borderColor]};
    border-radius: ${theme.radii.normal};

    ${media.lessThan('medium')`
            width: 10rem;
            height: 10rem;
            padding: ${theme.spacings[1]};
        `}

    svg,
    img,
    ${Loading} {
      width: 3rem;
      height: 3rem;
      object-fit: cover;

      ${media.lessThan('medium')`
        width: 4rem;
        height: 4rem;
      `}
    }

    ${media.lessThan('medium')`
        p {
            ${setTypography('h4', 'bold', 'gray8')}
        }
    `}
  `,
  text: (theme: DefaultTheme) => css`
    gap: calc(${theme.spacings[1]} / 2);
    & > p {
      ${setTypography('h5', 'bold', 'gray9')};
    }

    svg,
    img,
    ${Loading} {
      width: 1.6rem;
      height: 1.6rem;
      object-fit: cover;
    }
  `
}

export const Loading = styled(Shimmer).attrs({
  width: '2rem',
  height: '2rem'
})``

type WrapperProps = {
  text?: boolean
  borderColor: Color
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, text, borderColor }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings[1]};
    ${!text && wrapperModifiers.chip(theme, borderColor)};
    ${!!text && wrapperModifiers.text(theme)};
  `}
`
