  export const SelectField = ({
  label,
  name,
  initialOption,
  options,
  onClick,
  setValues,
}) => {
  const handleSelectChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      {label && <label className="">{label}</label>}
      <select
        name={name}
        onChange={handleSelectChange}
        onClick={onClick && onClick}
        className="w-full py-3 px-2 border border-gray-300 rounded-lg text-gray-400"
      >
        <option value="">{initialOption}</option>
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
