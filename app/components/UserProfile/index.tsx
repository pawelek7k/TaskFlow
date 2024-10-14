import { RiUser4Line } from "react-icons/ri";
import { RxDotsHorizontal } from "react-icons/rx";
import { CardsList } from "../CardsList";
import styles from "./user-profile.module.css";

export const UserProfileContainer = () => {
  return (
    <div className={styles.container}>
      <div>
        <ul className={styles.flex}>
          <li className={styles.icon}>
            <RiUser4Line />
          </li>
          <li className={styles.icon}>
            <RxDotsHorizontal />
          </li>
        </ul>
      </div>
      <div className={styles.imgContainer}>
        <div>img</div>
      </div>
      <div className={styles.textContainer}>
        <ul className={styles.list}>
          <li>
            <h2>Hello username</h2>
          </li>
          <li>
            <h3>e-mail</h3>
          </li>
        </ul>
      </div>
      <div>
        <CardsList />
      </div>
    </div>
  );
};
