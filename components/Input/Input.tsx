import { Field } from "react-final-form"

interface InputProps {
  name: string;
  label: string;
  placeholder?: string;
  autofocus?: boolean;
}

export const Input = (props: InputProps) => {
  const { name, label, placeholder, autofocus } = props;

  return (
    <Field
      name={name}
      render={({ input, meta }) => (
        <div className="flex flex-col gap-4">
          <label className="text-md font-bold">{label}</label>
          <input autoFocus={autofocus} maxLength={20} placeholder={placeholder} className="input" {...input} />
          {meta.touched && meta.error && <span className="text-red-500">{meta.error}</span>}
        </div>
      )}
    />
  )
}