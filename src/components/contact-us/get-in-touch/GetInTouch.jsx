import styles from "./style.module.css";

import { Form } from "../../global/form/Form";
import { RenderField } from "../../global/fields/RenderField";

export const GetInTouch = () => {
  return (
    <div className={styles.info_section}>
      <Form>
        <div className={styles.info}>
          <h2 className={styles.info_header}>Get In Touch</h2>
          <p className={styles.info_desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ab,
            sunt illo voluptatibus vitae fuga in soluta aperiam maiores et
            suscipit laudantium atque aut laboriosam possimus accusantium minus.
            Ducimus, doloremque?
          </p>
        </div>
        <div className={styles.fields}>
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              name: "firstName",
              label: "First Name",
              placeholder: "Iordan",
            }}
          />
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              name: "lastName",
              label: "Last Name",
              placeholder: "Bochev",
            }}
          />
        </div>
        <div className={styles.fields}>
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              label: "Email",
              name: "email",
              placeholder: "iordan@gmail.com",
            }}
          />
          <RenderField
            attributes={{
              type: "input",
              inputType: "text",
              label: "Phone Number",
              name: "phone",
              placeholder: "+359 896 35 9812",
            }}
          />
        </div>
        <RenderField
          attributes={{
            type: "input",
            inputType: "textarea",
            name: "message",
            label: "Share with us",
            placeholder: "Message",
          }}
        />
        <button className={styles.btn}>Send Message</button>
      </Form>
    </div>
  );
};
