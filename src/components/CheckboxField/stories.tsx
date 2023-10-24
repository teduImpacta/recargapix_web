import React from 'react'
import { Story, Meta } from '@storybook/react'
import { CheckboxField, CheckboxFieldProps } from '.'

export default {
	title: 'Components/CheckBox',
	component: CheckboxField,
	args: {
		name: 'checkbox'
	}
} as Meta<CheckboxFieldProps>

export const Default: Story<CheckboxFieldProps> = (props) => (
	<CheckboxField {...props as any} />
)
