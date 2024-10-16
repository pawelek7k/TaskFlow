"use client";

import { DashboardContainer } from "@/app/components/DashboardContainer";
import { useParams } from "next/navigation";
import styles from "../../components/DashboardContainer/container.module.css";

const Container = () => {
  const { slug } = useParams();

  const renderContent = () => {
    switch (slug) {
      case "dashboard":
        return <DashboardContainer />;
      case "notes":
        return <div>Notes</div>;
      case "tasks":
        return <div>tasks</div>;
      case "files":
        return <div>files</div>;
      case "calendar":
        return <div>calendar</div>;
      case "settings":
        return <div>settings</div>;
      default:
        return <div>Unknown section</div>;
    }
  };
  return (
    <div>
      <div className={styles.dashboardContainer}>{renderContent()}</div>
    </div>
  );
};

export default Container;
