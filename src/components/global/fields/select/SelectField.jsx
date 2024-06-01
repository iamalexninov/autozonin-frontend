import styles from "./style.module.css";

import { useState } from "react";

import { GlobalIcon } from "../../GlobalIcon";

export const SelectField = ({ name, label, placeholder }) => {
  // TODO: open one options onToggle, close others
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // onChange(option.value); // Pass the selected value to the onChange function
  };

  // TODO: Change them with prop
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div>
      {label && (
        <label htmlFor={label} className="label">
          {label}
        </label>
      )}
      <div className={styles.select} id={label}>
        <div className={styles.select_control} onClick={toggleDropdown}>
          <div className={styles.select_selected}>
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          <div className={styles.select_dropdown}>
            {isOpen ? (
              <GlobalIcon type="arrowUp" />
            ) : (
              <GlobalIcon type="arrowDown" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className={styles.select_menu}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles.select_option}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
