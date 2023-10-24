import { forwardRef } from 'react'
import { Typography } from '../Typography'
import * as S from './styles'

export type CheckboxProps = {
	label?: string
    value?: boolean
} & Omit<JSX.IntrinsicElements['input'], 'value'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Element({ label, ...rest }, ref) {
		return (
			<S.Wrapper>
				<S.Input ref={ref} type="checkbox" {...(rest as any)} />
				<Typography as="small">{label}</Typography>
			</S.Wrapper>
		)
	}
)
