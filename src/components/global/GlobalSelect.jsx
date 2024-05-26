import Select from "react-select";

export const GlobalSelect = ({ name, placeholder }) => {
  const useStyles = {
    control: () => ({
      display: "flex",
      width: "100%",
      padding: "5px",
      fontSize: "14px",
      borderRadius: "50px",
      color: "var(--white)",
      border: "1px solid var(--dark-gray)",
    }),
  };

  return <Select styles={useStyles} placeholder={placeholder} name={name} />;
};
