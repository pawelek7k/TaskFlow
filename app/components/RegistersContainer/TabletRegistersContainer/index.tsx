import { useState } from "react";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { SignIn } from "../../SignIn";
import { SignUp } from "../../SignUp";
import styles from "./styles.module.css";

export const TabletRegistersContainer = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const togglePage = () => {
    setIsLoginPage((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {isLoginPage ? <SignIn /> : <SignUp />}{" "}
      <PrimaryButton
        onClick={togglePage}
        label={isLoginPage ? "Go to Sign Up" : "Go to Sign In"}
      />
    </div>
  );
};
