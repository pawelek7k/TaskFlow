import React, { useState } from "react";
import styles from "./styles.module.css";

interface InputTypes {
  label: string;
}

export const Input: React.FC<InputTypes> = ({ label }) => {
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState(label);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setPlaceholder(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className={styles.group}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
        required
      />
      <span className={styles.highlight}></span>
    </div>
  );
};
