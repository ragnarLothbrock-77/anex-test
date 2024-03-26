import Home from '../pages';
import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { within, userEvent, expect } from '@storybook/test';

const client = new QueryClient();


const meta = {
  title: 'EmployeeApp/pages/Home',
  component: Home,
  decorators: [
    (Story) => (
      <div className="min-w-screen min-h-screen flex content-center items-center">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseHomePage: Story = {
  args: {}
};

export const InteractiveHomePage: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByTestId('create'));

    // await expect(
    //   canvas.getByTestId('close'),
    // ).toBeInTheDocument();

    // await userEvent.click(canvas.getByTestId('close'));
  },
};