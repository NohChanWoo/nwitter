import React from "react";
import ReactDOM from "react-dom/client";
import App from "components/App";



const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
);

/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
/*import firebase from "./firebase";
console.log(firebase);*/
