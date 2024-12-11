// utils/notification.js
import { VSnackbar } from "vuetify/lib"; // Nếu bạn đang dùng Vuetify

export function notifyError(message) {
  VSnackbar.show({
    message: message,
    color: "red",
    timeout: 5000, // Thời gian hiển thị thông báo
  });
}
