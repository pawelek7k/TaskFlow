import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { InfiniteTypewriter } from "../InfinityTypewriter";
import styles from "./styles.module.css";

export const FirstNotificationForUser: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasDismissed = Cookies.get("notificationDismissed");
    if (hasDismissed) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    Cookies.set("notificationDismissed", "true", { expires: 7 });
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <h3>
        <InfiniteTypewriter label={"Hey!"} />
      </h3>
      <p>
        You can change the category color for better recognition in our
        application!
      </p>
      <button onClick={handleDismiss}>OK!</button>
    </div>
  );
};
