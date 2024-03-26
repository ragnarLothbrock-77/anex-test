import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta = {
  title: 'EmployeeApp/components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div className="flex items-center content-center"><Story /></div>
    )
  ]
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessToast: Story = {
  args: {
    variant: 'success',
    text: 'Success'
  }
};

export const ErrorToast: Story = {
  args: {
    variant: 'error',
    text: 'Error. Try again'
  }
};