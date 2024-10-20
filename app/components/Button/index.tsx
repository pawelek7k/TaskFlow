import Image from "next/image";
import styles from "./styles.module.css";

interface ButtonType {
  label: string;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
}

export const PrimaryButton: React.FC<ButtonType> = ({
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
      <Image src="/images/btn-img.png" alt="btn-img" width="20" height="20" />
    </button>
  );
};
