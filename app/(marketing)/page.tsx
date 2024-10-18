"use client";

import { useState } from "react";
import { LogIn } from "../components/LogIn";
import { SignUp } from "../components/SignUp";

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div>
      <main>
        {isLogin ? <LogIn /> : <SignUp />}
        <button onClick={toggleForm}>
          {isLogin ? "Switch to registration" : "Switch to login"}
        </button>
      </main>
    </div>
  );
};

export default RegisterPage;
