import styles from "./input.module.css";

interface InputTypes {
  label: string;
}

export const Input: React.FC<InputTypes> = ({ label }) => {
  return (
    <div className={styles.group}>
      <input type="text" required placeholder={label} />
      <span className={styles.highlight}></span>
    </div>
  );
};
