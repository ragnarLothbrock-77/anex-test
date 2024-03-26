import type { Meta, StoryObj } from '@storybook/react';
import { Poster } from './Poster';

const meta = {
  title: 'EmployeeApp/components/Poster',
  component: Poster,
} satisfies Meta<typeof Poster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasePoster: Story = {
  args: {
    id: '1',
    name: 'Paul Atreydis',
    phone: '79251481910',
    email: 'dune@gamil.com',
    onSelectEmployee: () => console.log('Selected employee')
  },
  decorators: [
    (Story) => (
      <ul className="w-80 h-80 list-none">
        <Story />
      </ul>
    )
  ]
};
