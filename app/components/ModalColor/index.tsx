import { useState } from "react";
import { Logo } from "../Logo";
import styles from "./styles.module.css";

interface ModalWithColorsProps {
  onClose: () => void;
  onColorSelect: (color: string) => void;
}

export const ModalWithColors: React.FC<ModalWithColorsProps> = ({
  onClose,
  onColorSelect,
}) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const colors = [
    "#670183",
    "#830139",
    "#830101",
    "#018330",
    "#728301",
    "#833B01",
    "#498301",
    "#018369",
    "#016B83",
  ];

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <div>
          <Logo />
          <p>Choose Color Category</p>
        </div>
        <div className={styles.colorsContainer}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`${styles.colorOption} ${
                selectedColor === color ? styles.selected : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
