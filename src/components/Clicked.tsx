import React from "react";
import Button from "./Button";

function Clicked() {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <div>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
}

export default Clicked;
