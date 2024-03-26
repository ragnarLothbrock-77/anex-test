import Home from '../pages';
import Layout from '../layout/Layout';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'EmployeeApp/pages/Layout',
  component: Layout,
  // decorators: [
  //   (Story) => (
  //     <div className="min-w-screen min-h-screen flex content-center items-center">
  //       <Story />
  //     </div>
  //   )
  // ]
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseLayout: Story = {
  args: {
    children: <Home />
  }
};