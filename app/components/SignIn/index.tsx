import Image from "next/image";
import styles from "./styles.module.css";

export const SignIn: React.FC = () => {
  return (
    <div>
      <form action="#" className={styles.form}>
        <div>
          <h2>Sign in</h2>
          <Image
            src="/images/form-img.png"
            alt="form image"
            width="35"
            height="35"
          />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
