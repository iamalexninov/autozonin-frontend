export const InputField = ({ type, label, name, placeholder, setValues, max }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full">
      {label && (
        <label htmlFor="" className="pl-1 text-sm mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleInputChange}
        min={0}
        max={max}
        className="w-full py-3 px-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};
