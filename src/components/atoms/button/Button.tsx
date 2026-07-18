import React, { MouseEventHandler } from "react";
import "./button.scss";

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  SUCCESS = "success",
  NAVBAR = "navBar",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

// Define the props type
type ButtonProps = {
  key?: string;
  text: string; // Required text to display
  size?: ButtonSize; // Optional button size
  type?: ButtonTypes; // Optional color for button theme
  takeFullWidth?: boolean; //Should the button take full width of container div
  isDisabled?: boolean;
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
};

// Functional component
export const Button: React.FC<ButtonProps> = ({
  key,
  text,
  onClickHandler,
  takeFullWidth = false,
  type = ButtonTypes.PRIMARY,
  size = ButtonSize.SMALL,
  isDisabled = false,
}) => {
  return (
    <button
      disabled={isDisabled}
      key={key}
      className={`${size} ${type} ${takeFullWidth ? "w-full" : null}`}
      onClick={onClickHandler}
    >
      {text}
    </button>
  );
};
