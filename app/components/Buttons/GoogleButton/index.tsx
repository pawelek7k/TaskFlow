import { FcGoogle } from "react-icons/fc";
import styles from "./styles.module.css";

export const GoogleButton: React.FC = () => {
  return (
    <button className={styles.button}>
      <FcGoogle /> Continue with Google
    </button>
  );
};
