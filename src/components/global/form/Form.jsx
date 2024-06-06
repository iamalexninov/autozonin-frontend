import styles from "./style.module.css";

export const Form = ({ onSubmit, children }) => {
  const handleSubmit = (e) => {
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {children}
    </form>
  );
};
