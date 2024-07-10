export const TextareaField = ({ label, name, placeholder, setValues }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="pl-2 text-neutral-600 text-sm">
          {label}
        </label>
      )}
      {name && (
        <textarea
          placeholder={placeholder}
          name={name}
          id={name}
          className="p-3 text-base border border-l-neutral-400 rounded-2xl outline-none min-h-36"
          onChange={handleChange}
        ></textarea>
      )}
    </div>
  );
};
