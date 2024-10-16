import styles from "./container.module.css";

export const DashboardContainer = () => {
  return (
    <div className={styles.dashboardContainer}>
      <ul className={styles.tasksList}>
        <li>
          <div className={styles.circle}></div>
          <div className={styles.defaultColor}></div>
          <div>To do</div>
        </li>
        <li>
          <div className={styles.circle}></div>
          <div className={styles.defaultColor}></div>
          <div>InWork</div>
        </li>
        <li>
          <div className={styles.circle}></div>
          <div className={styles.defaultColor}></div>
          <div>Review</div>
        </li>
        <li>
          <div className={styles.circle}></div>
          <div className={styles.defaultColor}></div>
          <div>Done</div>
        </li>
      </ul>
    </div>
  );
};
