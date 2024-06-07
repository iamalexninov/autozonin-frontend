import styles from './style.module.css';

import { Link } from 'react-router-dom';
import { GlobalIcon } from '../../global/GlobalIcon';

export const LinkRecord = ({record}) => {
  return (
    <li>
      <Link to={record.path} className={styles.nav_link}>
        <GlobalIcon type={record.icon} size={19} />
        <p>{record.text}</p>
      </Link>
    </li>
  )
}
