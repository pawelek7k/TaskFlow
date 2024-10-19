import { FaFacebook, FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

export const SocialsInput = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <FaPhoneAlt />
        </li>
        <li>
          <MdEmail />
        </li>
        <li>
          <FaXTwitter />
        </li>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaTelegramPlane />
        </li>
      </ul>
    </div>
  );
};
