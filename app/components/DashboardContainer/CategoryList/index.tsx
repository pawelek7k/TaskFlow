import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { CreateTaskArea } from "../../CreateTask";
import { ModalWithColors } from "../../ModalColor";
import styles from "../container.module.css";
import { TaskItem } from "../TaskItem";

const category = [
  { status: "To do" },
  { status: "In Work" },
  { status: "Review" },
  { status: "Done" },
];

export const CategoryList = () => {
  const [isModalColorOpen, setIsModalColorOpen] = useState(false);
  const [isCreateTaskAreaOpen, setIsCreateTaskAreaOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
    number | null
  >(null);
  const [categoryColors, setCategoryColors] = useState(
    Array(category.length).fill("rgb(133, 184, 184)")
  );
  const [tasks, setTasks] = useState<
    Array<{ category: number; name: string; content: string }>
  >([]);

  const openModal = (setModalState: (open: boolean) => void, index: number) => {
    setSelectedCategoryIndex(index);
    setModalState(true);
  };

  const closeModal = (setModalState: (open: boolean) => void) =>
    setModalState(false);

  const updateCategoryColor = (color: string) => {
    if (selectedCategoryIndex === null) return;
    setCategoryColors((prevColors) =>
      prevColors.map((prevColor, i) =>
        i === selectedCategoryIndex ? color : prevColor
      )
    );
    closeModal(setIsModalColorOpen);
  };

  const addTask = (task: { name: string; content: string }) => {
    if (selectedCategoryIndex === null) return;
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...task, category: selectedCategoryIndex },
    ]);
    closeModal(setIsCreateTaskAreaOpen);
  };

  return (
    <>
      <ul className={styles.tasksList}>
        {category.map((cat, index) => (
          <li key={index}>
            <div className={styles.category}>
              <div
                className={styles.circle}
                style={{ backgroundColor: categoryColors[index] }}
                onClick={() => openModal(setIsModalColorOpen, index)}
              ></div>
              <div
                className={styles.bar}
                style={{ backgroundColor: categoryColors[index] }}
              ></div>
              <div>{cat.status}</div>
            </div>

            <div className={styles.taskContainer}>
              <div
                className={styles.plus}
                onClick={() => openModal(setIsCreateTaskAreaOpen, index)}
              >
                <GoPlus />
              </div>
              <TaskItem tasks={tasks} categoryIndex={index} />
              {isCreateTaskAreaOpen && selectedCategoryIndex === index && (
                <CreateTaskArea
                  onClose={() => closeModal(setIsCreateTaskAreaOpen)}
                  onCreateTask={addTask}
                />
              )}
            </div>
          </li>
        ))}
      </ul>

      {isModalColorOpen && (
        <ModalWithColors
          onClose={() => closeModal(setIsModalColorOpen)}
          onColorSelect={updateCategoryColor}
        />
      )}
    </>
  );
};
