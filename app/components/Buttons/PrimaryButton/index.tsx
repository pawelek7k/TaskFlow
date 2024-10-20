import Image from "next/image";
import styles from "./styles.module.css";

export interface ButtonType {
  label: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export const PrimaryButton: React.FC<ButtonType> = ({
  label,
  onClick,
  type = "button",
}) => {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {label}
      <Image
        loading="lazy"
        src="/images/btn-img.png"
        alt="button image"
        width="20"
        height="20"
      />
    </button>
  );
};
