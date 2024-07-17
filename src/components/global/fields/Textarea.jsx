export const Textarea = ({ label, name, placeholder, setValues }) => {
  const handleTextareaChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      {label && <label className="pl-1 text-sm mb-1">{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleTextareaChange}
        className="w-full py-3 px-2 border border-gray-300 rounded-lg"
      ></textarea>
    </div>
  );
};
