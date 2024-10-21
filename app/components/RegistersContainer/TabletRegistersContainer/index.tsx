import { useState } from "react";
import { PrimaryButton } from "../../Buttons/PrimaryButton";
import { SignIn } from "../../SignIn";
import { SignUp } from "../../SignUp";

export const TabletRegistersContainer = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  const togglePage = () => {
    setIsLoginPage((prev) => !prev);
  };

  return (
    <div>
      {isLoginPage ? <SignIn /> : <SignUp />}{" "}
      <PrimaryButton
        onClick={togglePage}
        label={isLoginPage ? "Go to Sign Up" : "Go to Sign In"}
      />
    </div>
  );
};
