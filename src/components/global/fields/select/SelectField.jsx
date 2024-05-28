import Select from "react-select";

export const SelectField = ({ name, placeholder }) => {
  const useStyles = {
    control: () => ({
      display: "flex",
      width: "100%",
      minWidth: "180px",
      padding: "5px",
      fontSize: "14px",
      borderRadius: "50px",
      color: "var(--white)",
      border: "1px solid var(--light-gray)",
    }),
  };

  return <Select styles={useStyles} placeholder={placeholder} name={name} />;
};
