import React from 'react'
import type { Story, Meta } from '@storybook/react'
import { Modal, type ModalProps } from '.'

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta<ModalProps>

export const Default: Story<ModalProps> = (props) => <Modal {...props} />
