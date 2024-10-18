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
    <ul>
      {tasks
        .filter((task) => task.category === categoryIndex)
        .map((task, taskIndex) => (
          <li key={taskIndex}>
            <strong>{task.name}</strong> {task.content}
          </li>
        ))}
    </ul>
  );
};
