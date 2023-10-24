import styled, { css } from 'styled-components'

type WrapperProps = {}

export const Wrapper = styled.div<WrapperProps>`
	${() => css`
		width: 100%;
		margin: 0 auto;
		display: flex;
        align-items: center;
        justify-content: center;
	`}
`

export const Input = styled.input`
	${({ theme }) => css`
		position: relative;
		margin-right: ${theme.spacings[1]};
		cursor: pointer;
		font: inherit;
		appearance: none;
		background-color: transparent;
		color: currentColor;
		border: 0.12rem solid ${theme.colors.gray7};
		border-radius: 50%;
		width: 1.6rem;
		height: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: center;

		&:checked {
			border-color: ${theme.colors.primary};
		}

		&:checked:before {
			content: '';
            align-self: center;
            justify-self: center;
            margin: 0 auto;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
			background-color: ${theme.colors.primary};
		}
	`}
`
