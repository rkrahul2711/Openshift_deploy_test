import "./App.css";
import "@elilillyco/ux-lds-react/src/css/lds.css";
import { Route, Routes } from "react-router-dom";

import "antd/dist/reset.css"



import "./App.css"


//import ErrorFallback from "./components/Common/error"
//import { ErrorBoundary } from "react-error-boundary"
//import { Amplify } from 'aws-amplify'

import "./scss/main.scss";

import BatchDetails from "./components/pages/batchDetails/batchDetails";
import Login from "./components/Authentication/login"
import DashboardDropdown from "./components/pages/dashboard/Batch_review_dashboard/dashboard.dropdown";
//import awsconfig from "aws/config"

function App() {
  //Amplify.configure(awsconfig)
  return (
   
            <div className="">
              <Routes>

                {/*<Route path="/" element={<Home />} />*/}
                <Route path="/" element={<DashboardDropdown />}/>
                <Route path="/details" element={<BatchDetails />}/>
                <Route path="/login" element={<Login />}/>
              </Routes>
            </div>
        

  );
}

export default App;
