import React from "react";
import clsx from "clsx"; // Helps merge class names
import "./card.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sx?: React.CSSProperties; // Similar to MUI's sx prop
}

const Card: React.FC<CardProps> = ({ children, className, sx, style, ...rest }) => {
  return (
    <div
      className={clsx("card", className)} // Merge custom and default class names
      style={{ ...sx, ...style }} // Merge custom styles
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
