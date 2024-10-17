import styles from "./modal.module.css";
interface CreateTaskModalProps {
  onClose: () => void;
}

export const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
  onClose,
}) => {
  return <div className={styles.overlay}></div>;
};
