import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
  return <h1 id="heading">Hello world from React app!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
