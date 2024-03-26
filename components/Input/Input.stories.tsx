import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Form } from 'react-final-form'
import { FormApi, SubmissionErrors } from 'final-form';

const meta = {
  title: 'EmployeeApp/components/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseInput: Story = {
  args: {
    name: 'name',
    label: 'Tap your name',
    placeholder: 'Your name'
  },
  decorators: [
    (Story) => (
      <Form
        onSubmit={() => console.log('Submit')}
        render={() => (
          <Story />
        )}
      >
      </Form>
    )
  ]
};

export const BaseInputFocused: Story = {
  args: {
    name: 'name',
    label: 'Tap your name',
    placeholder: 'Your name',
    autofocus: true
  },
  decorators: [
    (Story) => (
      <Form
        onSubmit={() => console.log('Submit')}
        render={() => (
          <Story />
        )}
      >
      </Form>
    )
  ]
};
