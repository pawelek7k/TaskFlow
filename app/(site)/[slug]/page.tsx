"use client";

import { useParams } from "next/navigation";

const Container = () => {
  const { slug } = useParams();

  const renderContent = () => {
    switch (slug) {
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
      <div className="flex-1 p-4">{renderContent()}</div>
    </div>
  );
};

export default Container;
