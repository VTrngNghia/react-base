import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "./tailwind-before.css";
import "./index.css";
import "./tailwind-after.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider as AntdProvider } from "antd";
import genValidationMessages from "./common/utils/genValidationMessages";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./plugins/store";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <AntdProvider form={{ validateMessages: genValidationMessages() }}>
        <App />
      </AntdProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
