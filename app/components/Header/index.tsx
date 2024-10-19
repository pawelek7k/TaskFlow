import Link from "next/link";
import { Logo } from "../Logo";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <nav>
        <ul className={styles.headerList}>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>About us</li>
          <li>News</li>
          <li>User Policy</li>
        </ul>
      </nav>
    </header>
  );
};
