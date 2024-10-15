import { cardItems } from "@/app/arrays/IconsList";
import Link from "next/link";
import styles from "./cards-list.module.css";

export const CardsList = () => {
  return (
    <ul className={styles.list}>
      {cardItems.map((item) => (
        <li key={item.label} className={styles.item}>
          <Link href={`/${item.label.toLowerCase()}`} aria-label={item.label}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
