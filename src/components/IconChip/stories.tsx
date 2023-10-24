import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { IconChip, type IconChipProps } from '.'

export default {
  title: 'Components/IconChip',
  component: IconChip
} as Meta<IconChipProps>

export const Default: Story<IconChipProps> = (props) => <IconChip {...props} />
