import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function Button({ children, style }: ButtonProps) {
  const handleClick = () => {
    console.log("Click!");
  };
  return (
    <button style={style} onClick={handleClick}>
      {children}
    </button>
  );
}
