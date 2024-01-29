
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/elements/Button';
import ModalButton from '../components/modules/ModalButton'; 

export default {
  title: 'modules/ModalButton',
  component: ModalButton,
  args: {
    modalContent: <p>Modal content</p>,
  },
  argTypes: {
    trigger: { table: { disable: true } },
    modalContent: { table: { disable: true } },
    modalProps: { table: { disable: true } },
  },
} as Meta<typeof ModalButton>;

type Story = StoryObj<typeof ModalButton>;

export const ButtonTrigger: Story = {
  args: {
    trigger: <Button>Lorem ipsum</Button>,
  },
};

export const AnchorTrigger: Story = {
  args: {
    trigger: <Button as="a">Lorem ipsum</Button>,
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: <div style={{ cursor: 'pointer' }}>Custom Trigger</div>,
  },
};
