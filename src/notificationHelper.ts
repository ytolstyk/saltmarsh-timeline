import { notifications } from "@mantine/notifications";
import { DefaultMantineColor } from "@mantine/core";

export type NotificationProps = {
  id?: string;
  title?: string;
  message: string;
  color?: DefaultMantineColor;
  duration?: number;
};

export const showNotification = (props: NotificationProps) => {
  notifications.show({
    id: props.id,
    title: props.title,
    message: props.message,
    color: props.color || "blue",
    autoClose: props.duration || 5000,
    withCloseButton: true,
  });
};
