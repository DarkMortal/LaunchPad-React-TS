import { Image } from "lucide-react";
import {
  FlexColumnContainer,
  COLUMN_CROSS_AXIS_ALIGNMENT,
  COLUMN_MAIN_AXIS_ALIGNMENT,
} from "../../atoms/flex-container/flexContainer";
import "./cardcard.scss";

export default function FallbackCard({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <FlexColumnContainer
      classNames_="carCard"
      paddingLeft_={11}
      paddingRight_={11}
      paddingTop_={11}
      paddingBottom_={11}
    >
      <FlexColumnContainer
        classNames_="fallBackImage"
        backgroundColor_="grey"
        mainAxisAlignment={COLUMN_MAIN_AXIS_ALIGNMENT.CENTER}
        crossAxisAlignment={COLUMN_CROSS_AXIS_ALIGNMENT.CENTER}
      >
        <Image color="white" size={55} />
      </FlexColumnContainer>
      <h3>{errorMessage}</h3>
    </FlexColumnContainer>
  );
}
