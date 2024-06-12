import { GlobalIcon } from "../../global/GlobalIcon";
import styles from "./style.module.css";

export const Description = () => {
  return (
    <div className={styles.desc_container}>
      <h5 className={styles.desc_h5}>Description</h5>
      <p className={styles.desc_p}>
        Quisque imperdiet dignissim enim dictum finibus. Sed consectetutr
        convallis enim eget laoreet. Aenean vitae nisl mollis, porta risus vel,
        dapibus lectus. Etiam ac suscipit eros, eget maximus Etiam sit amet ex
        pharetra, venenatis ante vehicula, gravida sapien. Fusce eleifend
        vulputate nibh, non cursus augue placerat pellentesque. Sed venenatis
        risus nec felis mollis, in pharetra urna euismod. Morbi aliquam ut
        turpis sit amet ultrices. Vestibulum mattis blandit nisl, et tristique
        elit scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut rutrum
        risus et nunc pretium scelerisque.
      </p>
      <div className={styles.desc_brochure}>
        <GlobalIcon type="document" />
        <p>Car-Brochure.Pdf</p>
      </div>
    </div>
  );
};
