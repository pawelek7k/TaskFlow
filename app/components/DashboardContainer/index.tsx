import { FirstNotificationForUser } from "../FirstNotification";
import { Input } from "../Input";
import { CategoryList } from "./CategoryList";
import styles from "./styles.module.css";

export const DashboardContainer: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <FirstNotificationForUser />
      <Input label="Enter Dashboard Name" />
      <CategoryList />
    </div>
  );
};
