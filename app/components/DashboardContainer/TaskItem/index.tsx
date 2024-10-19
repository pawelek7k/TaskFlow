import styles from "./styles.module.css";
interface Task {
  category: number;
  name: string;
  content: string;
}

interface TaskItemProps {
  tasks: Task[];
  categoryIndex: number;
}

export const TaskItem: React.FC<TaskItemProps> = ({ tasks, categoryIndex }) => {
  return (
    <ul className={styles.list}>
      {tasks
        .filter((task) => task.category === categoryIndex)
        .map((task, taskIndex) => (
          <li key={taskIndex}>
            <h3>{task.name}</h3> <p>{task.content}</p>
          </li>
        ))}
    </ul>
  );
};
