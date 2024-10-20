import React from "react";
import { PrimaryButton } from "../Button";
import { Headline } from "../Headline";

interface RegisterCardProps {
  heading: string;
  description: string;
  button: string;
  onClick: () => void;
}

export const RegisterCard: React.FC<RegisterCardProps> = ({
  heading,
  description,
  button,
  onClick,
}) => {
  return (
    <div>
      <Headline label={heading} />
      <p>{description}</p>
      <PrimaryButton onClick={onClick} label={button} />
    </div>
  );
};
