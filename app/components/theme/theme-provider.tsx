"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const ThemeProviderClient = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderClient;
