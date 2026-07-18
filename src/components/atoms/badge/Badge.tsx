import { CircleCheckBig, Shield, FileCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  FlexRowContainer,
  ROW_MAIN_AXIS_ALIGNMENT,
} from "../flex-container/flexContainer";

import { EnumDictionary } from "../../../entities/EnumDict";

import "./badge.scss";

export enum BADGE_TYPE {
  INSPECTED = "inspected",
  WARRANTY = "warranty",
  INSURED = "insured",
}

const backgroundColor: EnumDictionary<BADGE_TYPE, string> = {
  [BADGE_TYPE.INSPECTED]: "green",
  [BADGE_TYPE.WARRANTY]: "#272B2C",
  [BADGE_TYPE.INSURED]: "#006D71",
};
const icons: EnumDictionary<BADGE_TYPE, LucideIcon> = {
  [BADGE_TYPE.INSPECTED]: CircleCheckBig,
  [BADGE_TYPE.WARRANTY]: Shield,
  [BADGE_TYPE.INSURED]: FileCheck,
};

export function Badge({ type }: { type: BADGE_TYPE | string }) {
  // @ts-ignore
  const Icon = icons[type];
  return (
    <FlexRowContainer
      // @ts-ignore
      backgroundColor_={backgroundColor[type]}
      mainAxisAlignment={ROW_MAIN_AXIS_ALIGNMENT.CENTER}
      classNames_="badge"
      paddingTop_={5}
      paddingBottom_={5}
      paddingLeft_={10}
      paddingRight_={10}
    >
      <FlexRowContainer columnGap_={7}>
        <Icon size={20} color="whitesmoke" />{" "}
        <span style={{ color: "whitesmoke" }}>{type}</span>
      </FlexRowContainer>
    </FlexRowContainer>
  );
}
