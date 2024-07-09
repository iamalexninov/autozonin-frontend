import styles from "./style.module.css";
import { RenderField } from "../../global/fields/RenderField";

export const MyProfile = () => {
  return (
    <div className={styles.profile}>
      <form>
        <RenderField
          attributes={{
            type: "input",
            inputType: "text",
            placeholder: "image link..",
            name: "avatar",
            label: "Avatar",
          }}
        />
        <div className={styles.profile_fields}>
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              placeholder: "Alex",
              name: "firstName",
              label: "First Name",
            }}
          />
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              placeholder: "Ninov",
              name: "lastName",
              label: "Last Name",
            }}
          />
        </div>
        <div className={styles.profile_fields}>
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              placeholder: "alex@gmail.com",
              name: "email",
              label: "Email",
            }}
          />
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              placeholder: "+359 896 35 9895",
              name: "phone",
              label: "Phone",
            }}
          />
        </div>
        <button className={styles.profile_btn}>
            Save Profile
        </button>
      </form>
    </div>
  );
};
