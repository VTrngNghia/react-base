import React, { useEffect } from "react";
import "./App.css";
import { RouterOutlet } from "react-hook-guard";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    console.log("App");
  }, []);
  return (
    <BrowserRouter>
      <RouterOutlet relativeMode={true} routes={routes} />
    </BrowserRouter>
  );
}

export default App;
