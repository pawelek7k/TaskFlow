import { useState } from "react";
import { FirstNotificationForUser } from "../FirstNotification";
import { ModalWithColors } from "../ModalColor";
import styles from "./container.module.css";

const category = [
  { status: "To do" },
  { status: "In Work" },
  { status: "Review" },
  { status: "Done" },
];

export const DashboardContainer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
    number | null
  >(null);
  const [categoryColors, setCategoryColors] = useState(
    Array(category.length).fill("rgb(133, 184, 184)")
  );

  const openModal = (index: number) => {
    setSelectedCategoryIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const changeCategoryColor = (color: string) => {
    const updatedColors = [...categoryColors];
    if (selectedCategoryIndex !== null) {
      updatedColors[selectedCategoryIndex] = color;
    }
    setCategoryColors(updatedColors);
    closeModal();
  };

  return (
    <div className={styles.dashboardContainer}>
      <FirstNotificationForUser />
      <ul className={styles.tasksList}>
        {category.map((task, index) => (
          <li key={index}>
            <div className={styles.category}>
              <div
                className={styles.circle}
                style={{ backgroundColor: categoryColors[index] }}
                onClick={() => openModal(index)}
              ></div>
              <div
                className={styles.bar}
                style={{ backgroundColor: categoryColors[index] }}
              ></div>
              <div>{task.status}</div>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <ModalWithColors
          onClose={closeModal}
          onColorSelect={changeCategoryColor}
        />
      )}
    </div>
  );
};
