import { useState } from "react";
import "./App.css";
import Toggle from "./components/Toggle";

function App() {
  const [isToggleActive, setIsToggleActive] = useState(false);

  return (
    <>
      <div
        style={{
          width: 500,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Toggle setIsToggleActive={setIsToggleActive}></Toggle>
        {`The toggle is ${isToggleActive ? "active" : "not active"}`}
      </div>
    </>
  );
}

export default App;
