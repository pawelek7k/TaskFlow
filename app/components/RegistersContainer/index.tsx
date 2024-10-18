"use client";

import { useState } from "react";
import { LogIn } from "../LogIn";
import { SignUp } from "../SignUp";

export const RegistersContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div>
      {isLogin ? <LogIn /> : <SignUp />}
      <button onClick={toggleForm}>
        {isLogin ? "Switch to registration" : "Switch to login"}
      </button>
    </div>
  );
};
