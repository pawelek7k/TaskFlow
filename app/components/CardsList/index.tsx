import { cardItems } from "@/app/arrays/IconsList";
import styles from "./cards-list.module.css";

export const CardsList = () => {
  return (
    <ul className={styles.list}>
      {cardItems.map((item, index) => (
        <li key={index} className={styles.item}>
          <div>{item.icon}</div>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};
