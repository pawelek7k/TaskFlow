import { useState } from "react";
import styles from "./modal.module.css";
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
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <div>
          <input type="text" name="name" onChange={handleChange} />
          <textarea name="content" onChange={handleChange} />
        </div>
        <ul>
          <li>
            <button onClick={handleSubmit}>Add Task</button>
          </li>
          <li>
            <button onClick={onClose}>Cancel</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
