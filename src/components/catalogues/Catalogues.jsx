export const Catalogues = ({ type }) => {
  const renderCatalogue = {
    vehicles: "",
    blog: "",
  };

  return renderCatalogue[type];
};
