import {
  LdsContactLilly,
  LdsLanguageSelect,
  LdsLillyLogo,
  LdsSideNav,
  LdsUtilityMenuLink,
} from "@elilillyco/ux-lds-react";
import React from "react";
import Footer from "../footer/Footer";

function SideNav({ Page }) {
  const languageSelectorOptions = [
    {
      value: "us",
      label: "English",
      isoLangCode: "en",
    },
    {
      value: "germany",
      label: "Deutsche",
      isoLangCode: "de",
    },
    {
      value: "spain",
      label: "Español",
      isoLangCode: "es",
    },
    {
      value: "japan",
      label: "日本語",
      isoLangCode: "ja",
    },
  ];
  const contactLillyOptions = {
    content: (
      <>
        <h4>Lilly Helpline</h4>
      </>
    ),
    enableChat: true,
    hcpLinks: [
      {
        href: "/docs/components-contactlilly--docs",
        text: "Visit Lilly Medical (HCP)",
      },
      {
        href: "/docs/components-contactlilly--docs",
        text: "Custom Link 1",
      },
      {
        href: "/docs/components-contactlilly--docs",
        text: "Custom Link 2 Long Text Wrap",
      },
      {
        href: "/docs/components-contactlilly--docs1",
        iconName: "ArrowSquareOut",
        text: "Custom Link and Icon",
      },
    ],
    phone: {
      pretty: "1-800-1PRETTY",
      standard: "1-800-177-3889",
    },
    questionLinks: [
      {
        href: "/docs/components-contactlilly--docs",
        text: "Submit a Question",
      },
      {
        href: "/docs/components-contactlilly--docs",
        text: "Custom Question 1",
      },
      {
        href: "/docs/components-contactlilly--docs",
        text: "Custom Question 2 Long Text Wrap",
      },
      {
        href: "/docs/components-contactlilly--docs1",
        iconName: "Question",
        text: "Custom Q and Icon",
      },
    ],
  };
  return (
    <div>
      <LdsSideNav
        utilityMenuLinks={[
          <LdsUtilityMenuLink
            href="https://www.lillyhub.com/legal/lillyusa/english/termsofuse.html"
            key="pre"
            target="_blank"
          >
            Terms of use
          </LdsUtilityMenuLink>,
          <LdsUtilityMenuLink
            href="https://www.lillyhub.com/ux/lillyusa/english/accessibility.html"
            target="_blank"
            key="med"
          >
            Accessibility Statement
          </LdsUtilityMenuLink>,
        ]}
        languageSelector={
          <LdsLanguageSelect
            id="sideNavLanguageSelect"
            label="Languages"
            name="sideNavLanguageSelect"
            options={languageSelectorOptions}
            dropdownAlignment="left"
          />
        }
        contactLilly={<LdsContactLilly options={contactLillyOptions} btnIcon />}
        showUtilityLogo={false}
        showSSO={true}
        ssoIsLoggedIn={true}
        ssoEmail={"guest@lilly.com"}
        ssoDisplayName={"Guest"}
        ssoWelcomeText="Welcome, "
        ssoUserIcon={
          "https://images.ctfassets.net/srys4ukjcerm/3qDe7AcNSVSEz2Bo5wu3tp/6f09378143c4b632d015a002c057372d/Q12024_Homepage_Update_caring-image-card.png"
        }
        ssoMyProfileText={null}
        ssoSignOutText={null}
        ssoContent={<span>Manager</span>}
      >
        <LdsSideNav.MenuCol
          logo={
            <LdsLillyLogo
              sizeClass="sm"
              colorClass="red"
              href="/"
              logo="lilly-tag-below"
              className="no-padding"
            />
          }
          logoDesktop={
            <LdsLillyLogo
              sizeClass="lg"
              colorClass="red"
              href="/"
              logo="lilly-tag-below"
              className="no-padding"
            />
          }
        >
          <LdsSideNav.Link href={"/"}>Home</LdsSideNav.Link>
          <LdsSideNav.Menu label={"Task Manager"}>
            <LdsSideNav.Link href={"/overview"}>Overview</LdsSideNav.Link>
            <LdsSideNav.Link href={"/addTask"}>Add Task</LdsSideNav.Link>
            <LdsSideNav.Link href={"/taskManager"}>Dashboard</LdsSideNav.Link>
            <LdsSideNav.Link href={"/tableView"}>Table View</LdsSideNav.Link>
          </LdsSideNav.Menu>
          <LdsSideNav.Menu label={"Player"}>
            <LdsSideNav.Link href={"/video"}>Video Player</LdsSideNav.Link>
            <LdsSideNav.Link href={"/podcast"}>Podcast</LdsSideNav.Link>
          </LdsSideNav.Menu>
          <LdsSideNav.Link href={"/form"}>Form</LdsSideNav.Link>
        </LdsSideNav.MenuCol>

        <LdsSideNav.PageContent>
          <main
            id="main"
            className="main-content-container"
            style={{ minHeight: "100vh" }}
          >
            <div className="page-content">
              <Page />
            </div>
            <Footer />
          </main>
        </LdsSideNav.PageContent>
      </LdsSideNav>
    </div>
  );
}

export default SideNav;
