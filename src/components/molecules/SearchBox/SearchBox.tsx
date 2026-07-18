import { useRef } from "react";
import { Button, ButtonTypes } from "../../atoms/button/Button";
import { TextBox, TextBoxType } from "../../atoms/textbox/TextBox";
import { FlexRowContainer } from "../../atoms/flex-container/flexContainer";

export function SearchBox() {
  const textboxRef = useRef<HTMLInputElement>(null);

  return (
    <FlexRowContainer columnGap_={7} classNames_="search">
      <TextBox
        placeHolder="Search this site"
        type={TextBoxType.TEXT}
        inputRef={textboxRef}
        borderColor="#030618"
      />
      <Button
        onClickHandler={(_: any) =>
          alert(`Search query: ${textboxRef.current?.value}`)
        }
        type={ButtonTypes.SECONDARY}
        text="Search"
        //isDisabled={true}
      />
    </FlexRowContainer>
  );
}
