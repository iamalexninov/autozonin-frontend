import { InputField } from "./input/InputField";
import { TextareaField } from "./input/TextareaField";
import { SelectField } from "./select/SelectField";
import { CheckboxField } from "./checkbox/CheckboxField";
import { RangeField } from "./range/RangeField";

export const RenderField = ({ attributes }) => {
  const { type, name, onChange, label, placeholder } = attributes;

  const renderFieldByType = {
    text: (
      <InputField
        type={type}
        name={name}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
      />
    ),
    number: (
      <InputField
        type={type}
        name={name}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
      />
    ),
    password: (
      <InputField
        type={type}
        name={name}
        onChange={onChange}
        label={label}
        placeholder={placeholder}
      />
    ),
    textarea: (
      <TextareaField
        label={label}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    ),
    checkbox: (
      <CheckboxField
        type={type}
        label={label}
        name={name}
        onChange={onChange}
      />
    ),
    range: <RangeField label={label} name={name} />,
    select: (
      <SelectField
        label={label}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    ),
  };

  return renderFieldByType[type];
};
