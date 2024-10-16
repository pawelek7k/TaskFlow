import styles from "./container.module.css";

const tasks = [
  { status: "To do" },
  { status: "InWork" },
  { status: "Review" },
  { status: "Done" },
];

export const DashboardContainer = () => {
  const ChangeColor = () => {
    console.log("ok");
  };
  return (
    <div className={styles.dashboardContainer}>
      <ul className={styles.tasksList}>
        {tasks.map((task, index) => (
          <li key={index}>
            <div className={styles.circle} onClick={ChangeColor}></div>
            <div className={styles.defaultColor}></div>
            <div>{task.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
