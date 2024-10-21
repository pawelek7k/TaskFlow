"use client";

import { useWindowSize } from "../UseWindowSize";
import { DesktopRegistersContainer } from "./DesktopRegistersContainer";
import { TabletRegistersContainer } from "./TabletRegistersContainer";

export const RegistersContainer: React.FC = () => {
  const size = useWindowSize();

  return (
    <div>
      {size.width && size.width < 768 ? (
        <TabletRegistersContainer />
      ) : (
        <DesktopRegistersContainer />
      )}
    </div>
  );
};
