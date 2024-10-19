import Link from "next/link";
import styles from "./styles.module.css";

export const Logo = () => {
  return (
    <div>
      <Link href="/" className={styles.logo}>
        <h1>
          Task<span>Flow</span>
        </h1>
      </Link>
    </div>
  );
};
