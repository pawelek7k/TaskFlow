import { ButtonType } from "../PrimaryButton";
import styles from "./styles.module.css";

export const SecondaryButton: React.FC<ButtonType> = ({
  label,
  onClick,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      aria-label={label}
      className={styles.button}
    >
      {label}
    </button>
  );
};
