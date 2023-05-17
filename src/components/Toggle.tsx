import { Dispatch, useEffect, useState } from "react";
import "./Toggle.css";

type ToggleProps = {
  setIsToggleActive: Dispatch<React.SetStateAction<boolean>>;
};

function Toggle({ setIsToggleActive }: ToggleProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsToggleActive(false);
  }, []);

  function handleToggle() {
    setIsActive(!isActive);
    setIsToggleActive(!isActive);
  }

  return (
    <>
      <div className="container">
        <div
          className={isActive ? "buttonBackgroundActive" : "buttonBackground"}
        >
          <div
            onClick={handleToggle}
            className={isActive ? "buttonCircleActive" : "buttonCircle"}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Toggle;
