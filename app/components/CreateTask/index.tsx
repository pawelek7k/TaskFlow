import { Input } from "../Input";
import styles from "./modal.module.css";
interface CreateTaskModalTypes {
  onClose: () => void;
}

export const CreateTaskModal: React.FC<CreateTaskModalTypes> = ({
  onClose,
}) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContent}>
        <form action="">
          <Input label="Enter Dashboard Name" />
        </form>
      </div>
    </div>
  );
};
