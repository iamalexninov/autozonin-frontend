export const CheckBox = ({ name, label, category, setValues }) => {
  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;

    setValues((prev) => {
      const newValues = { ...prev };

      if (checked) {
        newValues[category] = [...newValues[category], name];
      } else {
        newValues[category] = newValues[category].filter(
          (item) => item !== name
        );
      }

      return newValues;
    });
  };

  return (
    <div className="flex items-center">
      <input
        id={name}
        type="checkbox"
        name={name}
        onChange={handleCheckBoxChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label htmlFor={name} className="ms-2 text-sm font-medium text-gray-600">
        {label}
      </label>
    </div>
  );
};
