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
      <div>
        <div>img</div>
      </div>
      <div>
        <ul>
          <li>Hello username</li>
          <li>e-mail</li>
        </ul>
      </div>
      <div>
        <CardsList />
      </div>
    </div>
  );
};
