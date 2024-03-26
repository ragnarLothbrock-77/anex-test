import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from './Dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

const meta = {
  title: 'EmployeeApp/components/Dashboard',
  component: Dashboard,
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseDashboard: Story = {
  args: {}
};