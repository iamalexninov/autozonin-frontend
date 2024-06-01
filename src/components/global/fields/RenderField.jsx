import { InputField } from "./input/InputField";
import { SelectField } from "./select/SelectField";

export const RenderField = ({ attributes }) => {
  const { type, inputType, label, placeholder, name } = attributes;

  const renderFieldByType = {
    input: (
      <InputField
        type={inputType}
        name={name}
        label={label}
        placeholder={placeholder}
      />
    ),
    // TODO: Consider adding options
    select: <SelectField label={label} placeholder={placeholder} name={name} />,
  };

  return renderFieldByType[type];
};
