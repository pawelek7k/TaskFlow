import styles from "./notification.module.css";

export const FirstNotificationForUser = () => {
  return (
    <div className={styles.container}>
      <h3>Hey!</h3>
      <p>
        You can change the category color for better recognition in our
        application!
      </p>
    </div>
  );
};
