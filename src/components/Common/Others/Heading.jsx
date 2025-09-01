import React from "react";

function Heading(prop) {
  return (
    <div className="my-4">
      <h2 className="mb-2 common-heading">{prop.title}</h2>
      <h5 className="common-sub-heading">{prop.subtitle}</h5>
    </div>
  );
}

export default Heading;
