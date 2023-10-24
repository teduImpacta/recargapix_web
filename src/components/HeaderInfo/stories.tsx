import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { HeaderInfo, type HeaderInfoProps } from '.'

export default {
  title: 'Components/HeaderInfo',
  component: HeaderInfo
} as Meta<HeaderInfoProps>

export const Default: Story<HeaderInfoProps> = (props) => <HeaderInfo {...props} />
