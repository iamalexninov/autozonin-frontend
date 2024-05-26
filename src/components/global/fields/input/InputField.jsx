import { TextField } from "./text-field/TextField";
import { RangeField } from "./range-field/RangeField";
import { CheckboxField } from "./checkbox-field/CheckboxField";
import { TextareaField } from "./text-field/TextareaField";

export const InputField = ({ type, label, name, placeholder }) => {
  const renderInputField = {
    text: <TextField name={name} label={label} placeholder={placeholder} />,
    range: <RangeField name={name} label={label}/>,
    checkbox: <CheckboxField name={name} />,
    textarea: (
      <TextareaField name={name} label={label} placeholder={placeholder} />
    ),
  };

  return renderInputField[type];
};
