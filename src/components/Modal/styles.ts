import styled, { css } from 'styled-components'

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,
  close: () => css`
    height: 0;
    width: 0;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
  `
}

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: ${theme.layers.overlay};

    &,
    ${Content} {
      transition: transform 0.2s ease-in, opacity 0.3s ease-in-out;
      ${isOpen && wrapperModifiers.open()};
      ${!isOpen && wrapperModifiers.close()};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(36rem, 95%);
    height: max-content;
    padding: ${theme.spacings[3]} ${theme.spacings[2]};
    background-color: ${theme.colors.gray0};
    border-radius: ${theme.radii.big};
    z-index: ${theme.layers.modal};
  `}
`

export const Top = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary200};
    border-radius: ${theme.radii.small};
    padding: ${theme.spacings[1]};
    cursor: pointer;
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings[2]};
    border-top: 0.1rem solid ${theme.colors.gray2};
  `}
`

const actionsModifiers = {
  cancelable: () => css`
    & > button:first-child {
      visibility: none;
      opacity: 0;
      pointer-events: none;
    }
  `
}

type ActionsProps = {
  isCancelable?: boolean
}

export const Actions = styled.div<ActionsProps>`
  ${({ theme, isCancelable }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${theme.spacings[1]};
    margin-top: ${theme.spacings[3]};
    ${!isCancelable && actionsModifiers.cancelable()};

    & > button:first-child {
      div > p {
        color: ${theme.colors.primary300};
      }
    }
  `}
`
