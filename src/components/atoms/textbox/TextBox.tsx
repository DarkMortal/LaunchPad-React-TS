import React from "react";
import "./textbox.scss";

export enum TextBoxSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum TextBoxType {
  TEXT = "text",
  EMAIL = "email",
  NUMBER = "number",
  PASSWORD = "password",
  TEXTAREA = "textarea",
}

type TextBoxProps = {
  size?: TextBoxSize;
  placeHolder?: string;
  type?: TextBoxType;
  borderColor?: string;
  borderWidth?: number;
  boldString?: boolean;
  textColor?: string;
  inputRef: React.LegacyRef<HTMLInputElement | HTMLTextAreaElement>;
};

// Functional component
export const TextBox: React.FC<TextBoxProps> = ({
  inputRef,
  type = TextBoxType.TEXT,
  size = TextBoxSize.SMALL,
  borderColor = "grey",
  borderWidth = 2,
  boldString = false,
  textColor = "black",
  placeHolder = "Enter some text",
}) => {
  return type === TextBoxType.TEXTAREA ? (
    <textarea
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        color: textColor,
        paddingLeft: 7,
        fontFamily: "inherit",
      }}
      rows={5}
      // @ts-ignore
      ref={inputRef}
      placeholder={placeHolder}
    />
  ) : (
    <input
      type={type}
      // @ts-ignore
      ref={inputRef}
      placeholder={placeHolder}
      className={`${boldString ? "boldweight" : ""} ${size}`}
      style={{
        border: `${borderWidth}px solid ${borderColor}`,
        color: textColor,
        paddingLeft: 7,
      }}
    />
  );
};
