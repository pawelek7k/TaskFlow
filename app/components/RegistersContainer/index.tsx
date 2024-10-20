"use client";

import { useState } from "react";
import { RegisterCard } from "../RegisterCard";
import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import styles from "./styles.module.css";

export const RegistersContainer: React.FC = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div
      className={`${styles.container} ${
        !isSignIn ? styles.rightPanelActive : ""
      }`}
    >
      <div className={`${styles.formContainer} ${styles.signUpContainer}`}>
        <SignUp />
      </div>
      <div className={`${styles.formContainer} ${styles.signInContainer}`}>
        <SignIn />
      </div>
      <div className={styles.overlayContainer}>
        <div className={styles.overlay}>
          <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
            <RegisterCard
              heading={"Welcome Back!"}
              description={
                "Welcome back! 🔑 Enter your login details and continue enjoying our services!"
              }
              button={"Sign up"}
              onClick={toggleForm}
            />
          </div>
          <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
            <RegisterCard
              heading={"Join to us!"}
              description={
                "Hi there! 🚀 We’re delighted that you want to collaborate with us. Sign up and become part of our amazing community!"
              }
              button={"Sign in"}
              onClick={toggleForm}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
