import { ButtonType } from "../PrimaryButton";
import styles from "./styles.module.css";

export const SecondaryButton: React.FC<ButtonType> = ({
  label,
  onClick,
  type = "button",
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {label}
    </button>
  );
};
