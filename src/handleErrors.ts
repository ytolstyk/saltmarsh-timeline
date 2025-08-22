import { showNotification } from "./notificationHelper";

export const handleErrors = (message: string, error?: unknown) => {
  showNotification({ title: "Error", message, color: "red" });
  console.error(message, error);
};
