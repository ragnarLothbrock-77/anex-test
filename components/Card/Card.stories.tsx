import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';


const meta = {
  title: 'EmployeeApp/components/Card',
  component: Card
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCardWithMockPath: Story = {
  args: {
    currentUser: {
      "id": "3fj4",
      "phone": "dcd",
      "name": "Feid Rauta",
      "email": "Feid@ssd",
      "city": "Gedi Prime",
      "company": "Harkonens"
    }
  },
  decorators: [
    (Story) => (
      <div className="min-w-screen min-h-screen flex justify-center items-center">
        <Story />
      </div>
    )
  ]
};