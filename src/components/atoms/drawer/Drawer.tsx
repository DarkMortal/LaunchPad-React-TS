import { ReactNode } from "react";
import { FlexColumnContainer } from "../flex-container/flexContainer";

import "./drawer.scss";

export default function Drawer({
  children,
  active = false,
}: {
  children: ReactNode;
  active: boolean;
}) {
  return (
    <FlexColumnContainer
      classNames_={`drawer ${active ? "activated" : "hidden"}`}
      backgroundColor_="#101315"
      paddingTop_={30}
      paddingLeft_={10}
    >
      {children}
    </FlexColumnContainer>
  );
}
