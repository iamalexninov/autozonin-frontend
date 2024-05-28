import styles from "./style.module.css";

import { useState } from "react";

import { Wrapper } from "../../global/wrapper/Wrapper";
import { GlobalIcon } from "../../global/GlobalIcon";
import { RenderField } from "../../global/fields/RenderField";

export const ListingSearch = () => {
  const [toggleFilters, setToggleFilters] = useState(false);

  const handleClick = () => {
    setToggleFilters((prev) => !prev);
  };

  return (
    <div className={styles.search}>
      <Wrapper>
        <form className={styles.search_form}>
          <div className={styles.search_form_preview}>
            <RenderField
              attributes={{
                type: "select",
                placeholder: "Condition",
                name: "condition",
              }}
            />
            <RenderField
              attributes={{
                type: "select",
                placeholder: "Category",
                name: "category",
              }}
            />
            <RenderField
              attributes={{
                type: "select",
                placeholder: "Type",
                name: "type",
              }}
            />
            <RenderField
              attributes={{
                type: "select",
                placeholder: "Make",
                name: "make",
              }}
            />
            <RenderField
              attributes={{
                type: "select",
                placeholder: "Model",
                name: "model",
              }}
            />
            {/* TODO: set per click - show/hide */}
            <div className={styles.more_filters} onClick={handleClick}>
              <GlobalIcon type="filter" size={25} />
              <p>More Filters</p>
            </div>
          </div>
          {toggleFilters && (
            <div className={styles.filters}>
              <div className={styles.filters_select}>
                <div>
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Fuel Type",
                      name: "fuel",
                    }}
                  />
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Cylinder",
                      name: "cylinder",
                    }}
                  />
                </div>
                <div>
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Drive Type",
                      name: "drivetype",
                    }}
                  />
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Transmission",
                      name: "transmission",
                    }}
                  />
                </div>
              </div>
              <div className={styles.filters_select}>
                <div>
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Door",
                      name: "door",
                    }}
                  />
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Color",
                      name: "color",
                    }}
                  />
                </div>
                <div>
                  <RenderField
                    attributes={{
                      type: "select",
                      placeholder: "Offer Type",
                      name: "Offer Type",
                    }}
                  />
                  <RenderField
                    attributes={{
                      type: "input",
                      inputType: "text",
                      placeholder: "VIN",
                      name: "VIN",
                    }}
                  />
                </div>
              </div>
              <div className={styles.sliders}>
                <RenderField
                  attributes={{
                    type: "input",
                    inputType: "range",
                    label: "Year",
                  }}
                />
                <RenderField
                  attributes={{
                    type: "input",
                    inputType: "range",
                    label: "Mileage",
                  }}
                />
                <RenderField
                  attributes={{
                    type: "input",
                    inputType: "range",
                    label: "Price",
                  }}
                />
              </div>
              <div className={styles.features}></div>
            </div>
          )}
        </form>
      </Wrapper>
    </div>
  );
};
