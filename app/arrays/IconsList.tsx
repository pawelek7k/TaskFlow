import { FaCalendarAlt, FaNotesMedical, FaTasks } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";

interface CardItem {
  icon: React.ReactNode;
  label: string;
}

export const cardItems: CardItem[] = [
  { icon: <TbLayoutDashboardFilled />, label: "Dashboard" },
  { icon: <FaNotesMedical />, label: "Notes" },
  { icon: <FaTasks />, label: "Tasks" },
  { icon: <GoFileSubmodule />, label: "Files" },
  { icon: <FaCalendarAlt />, label: "Calendar" },
  { icon: <IoMdSettings />, label: "Settings" },
];
