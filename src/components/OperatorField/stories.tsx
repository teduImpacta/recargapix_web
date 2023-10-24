import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { OperatorField, type OperatorFieldProps } from '.'

export default {
  title: 'Components/OperatorField',
  component: OperatorField
} as Meta<OperatorFieldProps>

export const Default: Story<OperatorFieldProps> = (props) => (
  <OperatorField {...(props as any)} />
)
