import type { Meta, StoryObj } from '@storybook/react';
import { Controller } from './Controller';
import Close from '../../public/close.svg';
import Add from '../../public/plus.svg';

const meta = {
  title: 'EmployeeApp/components/Controller',
  component: Controller,
} satisfies Meta<typeof Controller>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CloseController: Story = {
  args: {
    children: <Close />,
    bg: 'bg-red-500'
  }
};

export const AddController: Story = {
  args: {
    children: <Add />,
    bg: 'bg-green-600'
  }
};

export const isAbsoluteController: Story = {
  args: {
    children: <Close />,
    bg: 'bg-red-500',
    isAbsolute: true
  }
};

