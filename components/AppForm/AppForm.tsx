import { Form } from "react-final-form"
import { Input } from "../Input/Input"
import { ErrorValidation } from "@/interfaces/error.interface"
import { ValidationErrors } from "final-form"
import { UsersInterface } from "@/interfaces/user.interface";
import { SyntheticEvent } from "react";


interface AppFormProps {
  onSubmit: (values: any) => void;
  initialValue?: UsersInterface
}

export const AppForm = ({ onSubmit, initialValue }: AppFormProps) => {
  const validation = (values: ErrorValidation): ValidationErrors => {
    const error: ErrorValidation = {}

    if (!values.name) { error.name = 'Name field is empty' };
    if (!values.phone) { error.phone = 'Phone field is empty' };
    if (!values.email) { error.email = 'Email field is empty' };
    if (!values.city) { error.city = 'City field is empty'; };
    if (!values.company) { error.company = 'Company field is empty' };

    return error;
  }
  return (
    <Form
      initialValues={initialValue}
      onSubmit={onSubmit}
      validate={validation}
      render={({ handleSubmit }) => (
        <form className="grid grid-cols-2 bg-gray-700 p-10 gap-8 rounded-xl" onSubmit={handleSubmit}>
          <Input autofocus={true} name='name' label='Name' placeholder="Your Name" />
          <Input name='phone' label='Phone number' placeholder="+ 7 9.. ... .. .." />
          <Input name='email' label='Email' placeholder="Your email" />
          <Input name='city' label='City' placeholder="City you born" />
          <Input name='company' label='Company Name' placeholder="Current company" />

          <button className="h-2/3 text-center self-end  bg-blue-500 rounded-lg text-md font-bold" type="submit">Submit</button>
        </form>
      )}
    />
  )
}