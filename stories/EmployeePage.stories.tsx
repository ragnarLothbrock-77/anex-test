import SelectedEmployee from '../pages/[selected]';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();


const meta = {
  title: 'EmployeeApp/pages/SelectedEmployee',
  component: SelectedEmployee,
  decorators: [
    (Story) => (
      <div className="min-w-screen min-h-screen flex content-center items-center">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof SelectedEmployee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseEmployeePage: Story = {
  args: {}
};