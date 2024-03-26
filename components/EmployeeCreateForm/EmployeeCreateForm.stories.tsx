import type { Meta, StoryObj } from '@storybook/react';
import { Form } from 'react-final-form';
import { FormApi, SubmissionErrors } from 'final-form';
import { EmployeeForm } from './EmployeeCreateForm';

const meta = {
  title: 'EmployeeApp/components/EmployeeForm',
  component: EmployeeForm,
} satisfies Meta<typeof EmployeeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseForm: Story = {
  args: {},
  decorators: [
    (Story) => (<div className="max-w-4xl"><Story /></div>)
  ]
};
