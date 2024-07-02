import { RenderField } from "../../../../global/fields/RenderField";

export const FiltersColumnThree = () => {
  return (
    <div className="flex flex-wrap gap-3 xl:flex-nowrap">
      <div className="flex flex-wrap gap-3 w-full md:flex-nowrap">
        <RenderField
          attributes={{
            type: "number",
            name: "yearFrom",
            label: "Year From:",
            placeholder:'Min: 2000'
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            name: "yearTo",
            label: "Year To:",
            placeholder:'Max: 2024'
          }}
        />
      </div>
      <div className="flex flex-wrap gap-3 w-full md:flex-nowrap">
        <RenderField
          attributes={{
            type: "number",
            name: "priceFrom",
            label: "Price From:",
            placeholder:'Min: 0'
          }}
        />
        <RenderField
          attributes={{
            type: "number",
            name: "priceTo",
            label: "Price To:",
            placeholder:'Min: 250000'
          }}
        />
      </div>
    </div>
  );
};
