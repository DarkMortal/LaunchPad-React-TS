import {
  FlexRowContainer,
  ROW_MAIN_AXIS_ALIGNMENT,
} from "../../atoms/flex-container/flexContainer";

import "./footer.scss";

export default function Footer() {
  return (
    <FlexRowContainer
      classNames_="footer"
      backgroundColor_="#0D1012"
      paddingBottom_={12}
      paddingTop_={12}
      takeFullWidth={true}
      mainAxisAlignment={ROW_MAIN_AXIS_ALIGNMENT.CENTER}
    >
      <span style={{ color: "white" }}>
        &copy; Saptarshi Dey {new Date().getFullYear()}
      </span>
    </FlexRowContainer>
  );
}
