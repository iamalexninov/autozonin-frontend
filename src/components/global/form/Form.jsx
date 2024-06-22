import { useState } from "react";
import styles from "./style.module.css";

export const Form = ({ onSubmit, children }) => {
  const [formData, setFormData] = useState({});

  const handleFormData = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <form onSubmit={handleFormData} className={styles.form}>
      {children}
    </form>
  );
};
