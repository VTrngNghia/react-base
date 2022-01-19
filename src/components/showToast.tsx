import React from "react";
import { message } from "antd";

const types = {
  success: {
    iconColor: "green",
    class: "toast-success",
    icon: "check-circle",
  },
  error: {
    iconColor: "red",
    class: "toast-error",
    icon: ["far", "xmark"],
  },
  warn: {
    iconColor: "orange",
    class: "toast-warn",
    icon: ["far", "exclamation"],
  },
  info: {
    iconColor: "blue",
    class: "toast-info",
    icon: ["far", "info"],
  },
};

export const showToast = (
  type: "success" | "error" | "warn" | "info",
  msg: string,
  duration?: number,
) => {
  const hide = message[type]({
    icon: <></>,
    content: (
      <div className="flex flex-row items-center" onClick={() => hide()}>
        {msg}
      </div>
    ),
    duration,
    className: types[type].class,
  });
  return hide;
};
export default showToast;
