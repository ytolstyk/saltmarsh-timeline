import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import "./index.css";
import "./amplify_styles.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/dropzone/styles.css";
import { AuthContextWrappers } from "./AuthContextWrappers";
import { createTheme, MantineProvider } from "@mantine/core";
import { Storyboard } from "./storyboard/Storyboard";
import { StoryCardList } from "./storyboard/StoryCardList";

const theme = createTheme({
  primaryColor: "blue",
  defaultRadius: "md",
  fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  colors: {
    blue: [
      "#e6eeff",
      "#ccdcff",
      "#99b8ff",
      "#6694ff",
      "#3370ff",
      "#0063ff",
      "#0052d6",
      "#0042ad",
      "#003184",
      "#00215a",
    ],
  },
  components: {
    Button: { defaultProps: { radius: "md" } },
    Paper: { defaultProps: { radius: "md" } },
    Select: { defaultProps: { radius: "md" } },
    TextInput: { defaultProps: { radius: "md" } },
    Textarea: { defaultProps: { radius: "md" } },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Routes>
          <Route
            path="/story/:cardNumber"
            element={<Storyboard />}
          />
          <Route
            path="/story"
            element={<StoryCardList />}
          />
          <Route path="/*" element={<AuthContextWrappers />} />
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
