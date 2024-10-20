import styles from "./styles.module.css";

interface HeadlineType {
  label: string;
}

export const Headline: React.FC<HeadlineType> = ({ label }) => {
  return <h1 className={styles.text}>{label}</h1>;
};
