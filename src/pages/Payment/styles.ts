import { Form } from '@unform/web'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled(Form)`
  ${({ theme }) => css`
    width: min(60rem, 100%);
    background-color: ${theme.colors.gray0};
    height: 100%;
    overflow: hidden;

    ${media.lessThan('medium')`
        width: 100%;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings[3]} ${theme.spacings[2]} 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;

    & > h5:first-child {
      width: 100%;
      text-align: left;
    }

    ${media.lessThan('medium')`
        height: 100%;
    `}
  `}
`

export const Code = styled.div`
  ${({ theme }) => css`
    width: 20rem;
    height: max-content;
    padding: calc(${theme.spacings[1]} / 2);
    background-color: ${theme.colors.primary200};
    text-align: center;
    border-radius: ${theme.radii.xsmall};
    margin: ${theme.spacings[2]} 0 ${theme.spacings[1]};
    overflow-wrap: break-word;
    text-align: right;
  `}
`

export const CodeContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${theme.spacings[2]} 0 ${theme.spacings[4]};

    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;

      & > p {
        margin-top: calc(${theme.spacings[1]} / 2);

        & > span {
          font-weight: ${theme.fonts.default.styles.bold};
        }
      }
    }

    & > div:last-child {
      display: flex;
      align-items: end;
      justify-content: flex-end;
      flex-direction: column;

      & > button {
        width: min(100%, 15rem);
        padding: ${theme.spacings[1]} ${theme.spacings[2]};
      }
    }
  `}
`

export const Actions = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 35%;
    display: flex;
    align-items: end;
    justify-content: end;

    ${media.lessThan('medium')`
        padding: 0 ${theme.spacings[2]};
        position: absolute;
        bottom: calc(10vh - 2.4rem);
    `}

    & > button {
      margin: ${theme.spacings[3]} 0;
      align-self: flex-end;
      width: min(18rem, 100%);

      ${media.lessThan('medium')`
        width: 100%;
        justify-self: flex-end;
      `}
    }
  `}
`

export const Qrcode = styled.img`
  ${({ theme }) => css`
    width: 10.2rem;
    height: 10.6rem;
    border: 0.4rem solid ${theme.colors.primary300};
    object-fit: contain;
  `}
`
