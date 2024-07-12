import { InputField } from "./input/InputField";
import { TextareaField } from "./input/TextareaField";
import { SelectField } from "./SelectField";
import { CheckboxField } from "./checkbox/CheckboxField";

export const RenderField = ({ attributes }) => {
  const {
    type,
    name,
    label,
    placeholder,
    options,
    category,
    values,
    setValues,
  } = attributes;

  const renderFieldByType = {
    text: (
      <InputField
        type={type}
        name={name}
        setValues={setValues}
        label={label}
        placeholder={placeholder}
      />
    ),
    number: (
      <InputField
        type={type}
        name={name}
        setValues={setValues}
        label={label}
        placeholder={placeholder}
      />
    ),
    password: (
      <InputField
        type={type}
        name={name}
        setValues={setValues}
        label={label}
        placeholder={placeholder}
      />
    ),
    textarea: (
      <TextareaField
        label={label}
        name={name}
        placeholder={placeholder}
        setValues={setValues}
      />
    ),
    checkbox: (
      <CheckboxField
        type={type}
        label={label}
        name={name}
        category={category}
        values={values}
        setValues={setValues}
      />
    ),
    select: (
      <SelectField
        label={label}
        name={name}
        setValues={setValues}
        placeholder={placeholder}
        options={options}
      />
    ),
  };

  return renderFieldByType[type];
};
