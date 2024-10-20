import React from "react";

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
      <h1>{heading}</h1>
      <p>{description}</p>
      <button onClick={onClick}>{button}</button>
    </div>
  );
};
