"use client";

import { useState } from "react";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";
import styles from "./styles.module.css";

export const RegistersContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div className={styles.container}>
      {isLogin ? <LogIn /> : <SignUp />}
      <button onClick={toggleForm}>
        {isLogin ? "Switch to registration" : "Switch to login"}
      </button>
    </div>
  );
};
