import Image from "next/image";
import { GoogleButton } from "../Buttons/GoogleButton";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import styles from "./styles.module.css";

export const SignIn: React.FC = () => {
  return (
    <div>
      <form action="#" className={styles.form}>
        <div>
          <h2>Sign in</h2>
          <Image
            loading="lazy"
            src="/images/form-img.png"
            alt="form image"
            width="35"
            height="35"
          />
        </div>
        <input type="email" placeholder="Email" required autoComplete="email" />
        <input
          type="password"
          placeholder="Password"
          required
          autoComplete="current-password"
        />
        <a href="#">Forgot your password?</a>
        <SecondaryButton label={"Sign In"} type="submit" />
        <GoogleButton />
      </form>
    </div>
  );
};
