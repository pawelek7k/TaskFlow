import Link from "next/link";
import { Logo } from "../Logo";
import styles from "./styles.module.css";

export const SignUp: React.FC = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.logoContainer}>
          <Logo />
          <p>- your personal helper.</p>
        </div>
        <h1 className={styles.welcome}>Welcome back!</h1>
        <input
          type="email"
          className={styles.input}
          placeholder="Email"
          required
        />

        <input
          type="password"
          className={styles.input}
          placeholder="Password"
          required
        />
        <Link href="/forgot-password" className={styles.forgotPassword}>
          Forgot password?
        </Link>
        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
};
