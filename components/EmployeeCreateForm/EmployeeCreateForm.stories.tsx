import type { Meta, StoryObj } from '@storybook/react';
import { Form } from 'react-final-form';
import { FormApi, SubmissionErrors } from 'final-form';
import { EmployeeForm } from './EmployeeCreateForm';
import { userEvent, within } from '@storybook/testing-library';

const meta = {
  title: 'EmployeeApp/components/EmployeeForm',
  component: EmployeeForm,
  decorators: [
    (Story) => (<div className="h-screen flex items-center justify-center"><Story /></div>)
  ]
} satisfies Meta<typeof EmployeeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseForm: Story = {
  args: {}
};


// export const FilledInteractiveForm: Story = {
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     await userEvent.type(canvas.getByTestId('input-name-field'), 'John');
//     await userEvent.type(canvas.getByTestId('input-phone-field'), 'a-random-phone');
//     await userEvent.type(canvas.getByTestId('input-email-field'), 'a-random-email');
//     await userEvent.type(canvas.getByTestId('input-city-field'), 'a-random-city');
//     await userEvent.type(canvas.getByTestId('input-company-field'), 'a-random-company');


//     // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
//     await userEvent.click(canvas.getByRole('button'));

//     // await expect(
//     //   canvas.getByText(
//     //     'Everything is perfect. Your account is ready and we should probably get you started!',
//     //   ),
//     // ).toBeInTheDocument();
//   },
// };

