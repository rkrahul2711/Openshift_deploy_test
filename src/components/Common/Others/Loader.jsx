import { LdsLoadingSpinner } from "@elilillyco/ux-lds-react";
import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center loading-css">
      <LdsLoadingSpinner iconName="lilly-monogram" className="primary" />
    </div>
  );
}

export default Loader;
