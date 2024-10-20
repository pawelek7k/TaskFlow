import Image from "next/image";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import styles from "./styles.module.css";

export const SignUp: React.FC = () => {
  return (
    <div>
      <form action="#" className={styles.form}>
        <div>
          <h2>Create Account</h2>
          <Image
            src="/images/form-img.png"
            alt="form image"
            width="35"
            height="35"
          />
        </div>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <SecondaryButton label={"Sign In"} type="submit" />
      </form>
    </div>
  );
};
