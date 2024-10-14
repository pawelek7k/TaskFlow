import { FaCalendarAlt, FaNotesMedical, FaTasks } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import styles from "./cards-list.module.css";

export const CardsList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div>
          <TbLayoutDashboardFilled />
        </div>
        <span>Dashboard</span>
      </li>
      <li className={styles.item}>
        <div>
          <FaNotesMedical />
        </div>
        <span>Notes</span>
      </li>
      <li className={styles.item}>
        <div>
          <FaTasks />
        </div>
        <span>Tasks</span>
      </li>
      <li className={styles.item}>
        <div>
          <GoFileSubmodule />
        </div>
        <span>Files</span>
      </li>
      <li className={styles.item}>
        <div>
          <FaCalendarAlt />
        </div>
        <span>Calendar</span>
      </li>
      <li className={styles.item}>
        <div>
          <IoMdSettings />
        </div>
        <span>Settings</span>
      </li>
    </ul>
  );
};
