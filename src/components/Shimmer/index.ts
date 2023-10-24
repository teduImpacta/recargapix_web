import styled, { type DefaultTheme, css } from 'styled-components'

type ShimmerProps = {
  width: string
  height: string
}

export const baseShimmer = (theme: DefaultTheme) => css`
  border-radius: ${theme.radii.small};
  background-color: ${theme.colors.gray3};
  background-image: linear-gradient(
    to right,
    ${theme.colors.gray3} 0%,
    ${theme.colors.gray4} 20%,
    ${theme.colors.gray3} 40%,
    ${theme.colors.gray3} 100%
  );
  background-size: 80rem 10.4rem;
  background-repeat: no-repeat;
  animation: Shimmer 1s linear infinite forwards;

  @keyframes Shimmer {
    0% {
      background-position: -46.8rem 0;
    }
    100% {
      background-position: 46.8rem 0;
    }
  }
`

export const Shimmer = styled.div<ShimmerProps>`
  ${({ theme, width, height }) => css`
    width: ${width};
    height: ${height};
    display: inline-block;
    ${baseShimmer(theme)}
  `}
`
