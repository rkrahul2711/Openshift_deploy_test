/**
 * @fileoverview Authentication component for user login
 * @author Sushma
 */
import { Button, Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
//import { loginRequest } from "../../sso/authConfig"
import "./login.css";

const { Title, Text } = Typography;
import loginBG from "../../assets/login.png";
import Microsoft from "../../assets/Microsoft.png";
/**
 * Authentication component that handles user login via MSAL.
 * @function
 * @returns {JSX.Element} The rendered Authentication component.
 */
const  Login= ()=>{
  const navigate = useNavigate();
  // const {
  //   token: { colorUnilever },
  // } = theme.useToken()

  // /**
  // * Handles the login process using MSAL's popup method.
  // * @function
  // * @param {object} instance - The MSAL instance for authentication.
  // * @returns {void} No return value.
  // */
  // //Function used to Logout using MSAL.
  // function handleLogin(instance) {
  //   instance.loginPopup(loginRequest).catch(e => {
  //     console.error(e)
  //   })
  //  }
  const goToDashboard = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        height: "100vh",
        background: `url(${loginBG})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
      }}
    >
      {/* Left side with loginContent */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end", // Align to bottom
          justifyContent: "flex-start",
          padding: "40px",
          color: "white", // assuming white text over background
        }}
      >
        <div className="loginContent" style={{ maxWidth: "600px" }}>
          This AI solution automates the Global Batch Review (GBR) process using
          a rule-based traffic light system that evaluates each batch based on
          alarm severity and predefined exception criteria. By enabling ‘review
          by exception,’ the solution allows reviewers to focus only on batches
          that require attention. Aligned with global quality standards, the
          automation reduces manual review efforts, improves consistency, and
          accelerates batch disposition—driving operational efficiency and
          compliance at scale.
        </div>
      </div>

      {/* Right side with login form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="frostedBox">
          <div className="heading">B.A.T.C.H</div>
          <div className="textBlock">Sign in using Microsoft credentials</div>
          <button class="signInButton" onClick={goToDashboard}>
           
            Sign in
             <img src={Microsoft} alt="" style={{ height: "11px" }} />
          </button>
          {/* Replace styles.cardWrapper with className or inline if not using CSS modules */}
          {/* <Card bordered={false} className="recomcard">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ display: "flex", alignItems: "end", padding: "20px 0" }}>
            <img src={UniopsLogo} alt="Unilever" loading="lazy" height={50} />
          </div>

          <div
            style={{
              padding: "28px 0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: colorUnilever,
                fontSize: 18,
                fontFamily: "Unilever Shilling",
              }}
            >
              Welcome to
            </Text>
            <Title
              level={2}
              style={{
                marginTop: 0,
                color: colorUnilever,
                fontSize: "2.5rem",
                fontFamily: "Unilever Shilling",
              }}
            >
              Cost to Serve
            </Title>
          </div>

          <div style={{ padding: "28px 0" }}>
            <Button
              type="primary"
              style={{
                backgroundColor: colorUnilever,
                cursor: "pointer",
              }}
              onClick={() => handleLogin(instance)}
              loading={inProgress === "login"}
            >
              Sign in with Unilever ID
            </Button>
          </div>
        </div>
      </Card> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
