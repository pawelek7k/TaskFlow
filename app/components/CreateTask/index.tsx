import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { SecondaryButton } from "../Buttons/SecondaryButton";
import styles from "./styles.module.css";
interface CreateTaskModalTypes {
  onClose: () => void;
  onCreateTask: (task: { name: string; content: string }) => void;
}

export const CreateTaskArea: React.FC<CreateTaskModalTypes> = ({
  onClose,
  onCreateTask,
}) => {
  const [taskContent, setTaskContent] = useState({
    name: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setTaskContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onCreateTask(taskContent);
    setTaskContent({ name: "", content: "" });
  };
  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <div className={styles.inputsContainer}>
          <input type="text" name="name" onChange={handleChange} />
          <textarea name="content" onChange={handleChange} />
        </div>
        <ul className={styles.buttons}>
          <li>
            <SecondaryButton label="Add Task" onClick={handleSubmit} />
          </li>
          <li>
            <button onClick={onClose}>
              <IoCloseOutline />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
