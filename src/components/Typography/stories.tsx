import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { Typography, type TypographyProps } from '.'

export default {
  title: 'Components/Typography',
  component: Typography,
  args: {
    children: 'Typography'
  }
} as Meta<TypographyProps>

export const Default: Story<TypographyProps> = (props) => (
  <Typography {...props} />
)
