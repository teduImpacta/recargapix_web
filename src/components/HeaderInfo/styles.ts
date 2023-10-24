import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.primary200};
    height: max-content;
    border-radius: ${theme.radii.small};
    padding: ${theme.spacings[2]} ${theme.spacings[2]};

    ${media.lessThan('medium')`
        padding: calc(${theme.spacings[1]} + 4) ${theme.spacings[2]};
    `}
  `}
`

export const Top = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > h5 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings[2]};
      cursor: pointer;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 10rem 1fr;
    align-items: center;
    justify-content: start;
    text-align: left;
    gap: ${theme.spacings[1]};

    h5 > div:first-child {
      width: max-content;
    }

    & + & {
      margin-top: calc(${theme.spacings[1]} / 2);
    }
  `}
`

export const Edit = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.spacings[1]};

    h5 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;
    }

    & > h5:last-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings[1]};
      cursor: pointer;
    }

    img {
        width: 2rem;
        height: 2rem;
        object-fit: contain;
    }
  `}
`
