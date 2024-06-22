import CreatableSelect from "react-select/creatable";

export const SelectField = ({
  name,
  label,
  placeholder,
  options,
  setValues,
}) => {
  const handleOnChange = (selectedOption, { name }) => {
    setValues((prev) => ({
      ...prev,
      [name]: selectedOption.value,
    }));
  };

  return (
    <div>
      <label className="label">{label}</label>
      <CreatableSelect
        options={options}
        name={name}
        placeholder={placeholder}
        styles={{
          control: () => ({
            display: "flex",
            padding: "0.6rem",
            borderRadius: "10px",
            border: "1px solid var(--light-gray)",
            fontSize: "14px",
          }),
        }}
        onChange={handleOnChange}
      />
    </div>
  );
};
