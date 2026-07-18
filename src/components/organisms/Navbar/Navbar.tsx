import {
  FlexRowContainer,
  ROW_MAIN_AXIS_ALIGNMENT,
  ROW_CROSS_AXIS_ALIGNMENT,
} from "../../atoms/flex-container/flexContainer";
import { SearchBox } from "../../molecules/SearchBox/SearchBox";
import "./navbar.scss";
import Logo from "../../atoms/logo/logo";

import Drawer from "../../atoms/drawer/Drawer";

import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Button, ButtonSize, ButtonTypes } from "../../atoms/button/Button";
import { Menu } from "lucide-react";

export default function NavBar() {
  const [showDrawer, toggleDrawer] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 600px)");

  return (
    <>
      <FlexRowContainer
        classNames_="navbar"
        backgroundColor_="#030618"
        paddingLeft_={5}
        paddingTop_={10}
        paddingBottom_={10}
        paddingRight_={6}
        takeFullWidth={false}
      >
        <FlexRowContainer
          takeFullWidth={true}
          paddingLeft_={12}
          columnGap_={20}
        >
          {!isMobile ? (
            <>
              <Logo />
              <FlexRowContainer
                crossAxisAlignment={ROW_CROSS_AXIS_ALIGNMENT.CENTER}
              >
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
              </FlexRowContainer>
            </>
          ) : (
            <Menu className="menuBar" onClick={(_) => toggleDrawer(true)} />
          )}
        </FlexRowContainer>
        <FlexRowContainer
          mainAxisAlignment={ROW_MAIN_AXIS_ALIGNMENT.RIGHT}
          takeFullWidth={true}
          paddingRight_={4}
        >
          <SearchBox />
        </FlexRowContainer>
      </FlexRowContainer>

      {isMobile && (
        <Drawer active={showDrawer}>
          <div>
            <FlexRowContainer>
              <FlexRowContainer takeFullWidth={true}>
                <Logo />
              </FlexRowContainer>
              <FlexRowContainer
                takeFullWidth={true}
                paddingRight_={20}
                mainAxisAlignment={ROW_MAIN_AXIS_ALIGNMENT.RIGHT}
                crossAxisAlignment={ROW_CROSS_AXIS_ALIGNMENT.CENTER}
              >
                <Button
                  text="&times;"
                  size={ButtonSize.MEDIUM}
                  type={ButtonTypes.NAVBAR}
                  onClickHandler={(_) => toggleDrawer(false)}
                />
              </FlexRowContainer>
            </FlexRowContainer>
            <hr />
          </div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </Drawer>
      )}
    </>
  );
}
