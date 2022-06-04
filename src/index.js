import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.styles.css";
import "animate.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "14px", fontFamily: "Roboto Slab", fontWeight: 350 }}
      />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
