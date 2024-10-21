import styles from "./styles.module.css";

interface GoogleBtnType {
  label: string;
}

export const GoogleButton: React.FC<GoogleBtnType> = ({ label }) => {
  return <button className={styles.button}>{label}</button>;
};
