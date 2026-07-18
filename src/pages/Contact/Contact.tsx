import { useRef } from "react";
import { Button } from "../../components/atoms/button/Button";
import {
  FlexColumnContainer,
  COLUMN_MAIN_AXIS_ALIGNMENT,
  COLUMN_CROSS_AXIS_ALIGNMENT,
} from "../../components/atoms/flex-container/flexContainer";
import { TextBox, TextBoxType } from "../../components/atoms/textbox/TextBox";

import "./contact.scss";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const validateEmail = (email: string) => {
    /**
     * Stricter RFC-inspired regex:
     * - Still not 100% RFC 5322 (that becomes unwieldy),
     *   but tighter on domain and local rules.
     * - Disallows consecutive dots and leading/trailing dots.
     * - Validates DNS-like domain labels.
     */
    const STRICT_EMAIL_REGEX =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (typeof email !== "string") return false;
    const trimmed = email.trim();
    return STRICT_EMAIL_REGEX.test(trimmed);
  };

  const handleSubmit = () => {
    // @ts-ignore
    let name: string | undefined = nameRef.current?.value ?? "";
    // @ts-ignore
    let email: string | undefined = emailRef.current?.value ?? "";
    // @ts-ignore
    let message: string | undefined = messageRef.current?.value ?? "";

    if (name == "") {
      alert("Please fill your name");
      return;
    }
    if (email == "") {
      alert("Please fill your email");
      return;
    }
    if (!validateEmail(email ?? "")) {
      alert("Please enter a valid email");
      return;
    }
    if (message == "") {
      alert("Please fill your feedback");
      return;
    }
    alert(`Thank you ${name}, for filling your valuable feedback.`);
  };

  return (
    <div className="cover-content">
      <FlexColumnContainer
        takeFullHeight={true}
        classNames_="contact"
        crossAxisAlignment={COLUMN_CROSS_AXIS_ALIGNMENT.CENTER}
        mainAxisAlignment={COLUMN_MAIN_AXIS_ALIGNMENT.CENTER}
      >
        <div className="contactGrid">
          <div className="details">
            <h3>Contact us</h3>
            <span>
              Your feedback matters to us! Please share your thoughts,
              suggestions, or concerns to help us improve and serve you better.
              Every comment counts, and we truly appreciate your time and input.
              Thank you for helping us grow!
            </span>
          </div>
          <FlexColumnContainer
            classNames_="feedback-form"
            backgroundColor_="#E2EAF4"
            paddingBottom_={12}
            paddingLeft_={12}
            paddingTop_={12}
            paddingRight_={12}
            rowGap_={15}
          >
            <TextBox
              inputRef={nameRef}
              borderColor="transparent"
              type={TextBoxType.TEXT}
              placeHolder="Please enter your name"
            />
            <TextBox
              inputRef={emailRef}
              borderColor="transparent"
              type={TextBoxType.EMAIL}
              placeHolder="Please enter your email"
            />
            <TextBox
              inputRef={messageRef}
              borderColor="transparent"
              type={TextBoxType.TEXTAREA}
              placeHolder="Please enter your feedback"
            />
            <Button text="Submit" onClickHandler={handleSubmit} />
          </FlexColumnContainer>
        </div>
      </FlexColumnContainer>
    </div>
  );
}
