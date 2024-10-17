import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CreateTaskModal } from "../CreateTask";
import { FirstNotificationForUser } from "../FirstNotification";
import { Input } from "../Input";
import { ModalWithColors } from "../ModalColor";
import styles from "./container.module.css";

const category = [
  { status: "To do" },
  { status: "In Work" },
  { status: "Review" },
  { status: "Done" },
];

export const DashboardContainer: React.FC = () => {
  const [isModalColorOpen, setIsModalColorOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
    number | null
  >(null);
  const [categoryColors, setCategoryColors] = useState(
    Array(category.length).fill("rgb(133, 184, 184)")
  );
  const [isCreateTaskModal, setIsCreateTaskModal] = useState(false);

  const openColorModal = (index: number) => {
    setSelectedCategoryIndex(index);
    setIsModalColorOpen(true);
  };

  const closeColorModal = () => {
    setIsModalColorOpen(false);
  };

  const changeCategoryColor = (color: string) => {
    const updatedColors = [...categoryColors];
    if (selectedCategoryIndex !== null) {
      updatedColors[selectedCategoryIndex] = color;
    }
    setCategoryColors(updatedColors);
    closeColorModal();
  };

  const openCreateTaskModal = () => {
    setIsCreateTaskModal(true);
  };

  const closeCreateTaskModal = () => {
    setIsCreateTaskModal(false);
  };

  return (
    <div className={styles.dashboardContainer}>
      <FirstNotificationForUser />
      <Input label="Enter Dashboard Name" />
      <ul className={styles.tasksList}>
        {category.map((task, index) => (
          <li key={index}>
            <div className={styles.category}>
              <div
                className={styles.circle}
                style={{ backgroundColor: categoryColors[index] }}
                onClick={() => openColorModal(index)}
              ></div>
              <div
                className={styles.bar}
                style={{ backgroundColor: categoryColors[index] }}
              ></div>
              <div>{task.status}</div>
            </div>
            <div className={styles.taskContainer}>
              <div
                className={styles.plus}
                onClick={() => openCreateTaskModal()}
              >
                <GoPlus />
              </div>
            </div>
          </li>
        ))}
      </ul>

      {isModalColorOpen && (
        <ModalWithColors
          onClose={closeColorModal}
          onColorSelect={changeCategoryColor}
        />
      )}

      {isCreateTaskModal && <CreateTaskModal onClose={closeCreateTaskModal} />}
    </div>
  );
};
