import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings[3]};
    ${media.lessThan('medium')`
        margin-top: ${theme.spacings[2]};
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(5, 8rem);
    gap: ${theme.spacings[1]};
    place-items: center;
    cursor: pointer;
    margin-top: ${theme.spacings[1]};

    ${media.lessThan('medium')`
        grid-template-columns: repeat(3, 10rem);
    `}
  `}
`

export const FaultInput = styled.input`
  display: none;
`
