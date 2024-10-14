import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.overlay}>
      <h1>
        Task<span>Flow</span>
      </h1>
    </div>
  );
};
