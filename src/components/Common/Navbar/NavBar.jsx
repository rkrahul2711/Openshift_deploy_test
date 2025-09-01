import {
  LdsHeader,
  LdsUtilityMenuDropdown,
  LdsUtilityMenuLink,
} from "@elilillyco/ux-lds-react";
import React from "react";

function NavBar() {
  return (
    <div>
      <LdsHeader
        lillyLogo={{
          logo: "lilly-tag-below",
          className: "no-pad-left no-pad-right no-pad-bottom",
          href: "https://lilly.com",
          target: "_blank",
          ariaLabel: "visit lilly.com a medicine company (opens in a new tab)",
          colorClass: "red",
          sizeClass: "md",
        }}
        currentRoute="/page-1"
        sticky={true}
        showSSO={true}
        utilityMenuLinks={[
          <LdsUtilityMenuLink href="#" key="pre">
            Prescribing Information
          </LdsUtilityMenuLink>,
          <LdsUtilityMenuLink href="#" key="med">
            Medication Guide
          </LdsUtilityMenuLink>,
          <LdsUtilityMenuDropdown key="dd" label="Dropdown example">
            <LdsUtilityMenuDropdown.Link href="#">
              Link 1
            </LdsUtilityMenuDropdown.Link>
            <LdsUtilityMenuDropdown.Link href="#">
              Link 2
            </LdsUtilityMenuDropdown.Link>
            <LdsUtilityMenuDropdown.Button onClick={() => alert("click")}>
              Button
            </LdsUtilityMenuDropdown.Button>
          </LdsUtilityMenuDropdown>,
        ]}
      >
        <LdsHeader.Link href={"/"}>Home</LdsHeader.Link>
        <LdsHeader.Link href={"/video"}>Player</LdsHeader.Link>
      </LdsHeader>
    </div>
  );
}

export default NavBar;
