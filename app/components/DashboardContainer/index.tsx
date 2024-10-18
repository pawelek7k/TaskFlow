import { FirstNotificationForUser } from "../FirstNotification";
import { Input } from "../Input";
import styles from "./container.module.css";
import { CategoryList } from "./CategoryList";

export const DashboardContainer: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <FirstNotificationForUser />
      <Input label="Enter Dashboard Name" />
      <CategoryList />
    </div>
  );
};
