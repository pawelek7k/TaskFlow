import React from "react";
import { PrimaryButton } from "../Button";
import { Headline } from "../Headline";
import styles from "./styles.module.css";

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
    <div className={styles.container}>
      <Headline label={heading} />
      <p>{description}</p>
      <PrimaryButton onClick={onClick} label={button} />
    </div>
  );
};
