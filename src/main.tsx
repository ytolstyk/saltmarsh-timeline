import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";
import { AuthContextWrappers } from "./AuthContextWrappers";
import { createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  /** Put your mantine theme override here */
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <AuthContextWrappers />
    </MantineProvider>
  </StrictMode>
);
