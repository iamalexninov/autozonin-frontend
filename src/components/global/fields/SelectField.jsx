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
    <>
      <label className="label">{label}</label>
      <CreatableSelect
        options={options}
        name={name}
        placeholder={placeholder}
        styles={{
          control: () => ({
            display: "flex",
            padding: "0.75rem",
            borderRadius: "9999px",
            border: "1px solid rgb(163, 163, 163)",
            fontSize: "16px",
            width: "100%",
            color: "black",
          }),
        }}
        onChange={handleOnChange}
      />
    </>
  );
};
