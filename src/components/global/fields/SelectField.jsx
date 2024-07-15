import CreatableSelect from "react-select/creatable";

export const SelectField = ({
  name,
  label,
  placeholder,
  options,
  onClick,
  setValues,
}) => {
  const handleOnChange = (selectedOption, { name }) => {
    if (setValues) {
      setValues((prev) => ({
        ...prev,
        [name]: selectedOption.value,
      }));
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="pl-2 text-neutral-600 text-sm">{label}</label>
      <CreatableSelect
        options={options}
        name={name}
        placeholder={placeholder}
        styles={{
          control: () => ({
            display: "flex",
            padding: "0.3rem",
            borderRadius: "9999px",
            border: "1px solid rgba(163, 163, 163,0.5)",
            fontSize: "14px",
            width: "100%",
            color: "black",
          }),
        }}
        onChange={handleOnChange}
      />
    </div>
  );
};
