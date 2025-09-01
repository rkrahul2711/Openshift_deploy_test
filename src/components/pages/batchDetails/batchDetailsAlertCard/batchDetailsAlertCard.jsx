
import bot from "../../../../assets/Image BOT Lily.png";
import "./batchDetailsAlertCard.css"
const BatchDeatilsAlertCard = ({batchInfo}) => {
  return (
    <>
      {/* Left Side - Text Content */}
      {/* <div
        style={{
          flex: 1,
          maxWidth: "70%", // ✅ Left side won't exceed 70% of the box
          wordWrap: "break-word", // ✅ Ensures long words wrap
        }}
      >
        <p style={{ fontSize: "14px", fontWeight: 500,marginBottom:"0.2em" }}>
          Batch Exception Summary - AI Agent
        </p>

        <p style={{ fontSize: "12px", fontWeight: 500 }}>
          Exception Detected in Formulation Phase
        </p>

        <ul className="details-batch-AI-opt-card">
          <li style={{ color: "red" }}>
            One or more alarms were recorded during the formulation phase of
            this batch. This triggers an exception flag as per GMP policy for
            manual QA review.
          </li>
          <li>
            The alarm comment provided partially aligns with SOP AR 100571 for
            temperature alarms, but it is incomplete:
          </li>
          <li>Probe check performed</li>
          <li style={{ color: "red" }}>
            The temperature mentioned by the operator doesnot match with the
            acceptable range (16°C) for ALM6318 alarm situation.
          </li>
        </ul>

        <p style={{ fontSize: "12px", fontWeight: 500 }}>Alarm Details</p>

        <ul className="details-batch-AI-opt-card">
          <li>Alarm Code: ALM6318.</li>
          <li>Equipment: Holding Bag Tank Inlet</li>
          <li>Type: Temperature Fault – Low-Low</li>
          <li>
            Timestamp: 27-Jul-2024 18:10:03 → 18:53:51 (Duration: ~44 min).
          </li>
        </ul>
      </div> */}
      <div
        className="details-batch-AI-text-container"
      >
        {/* SECTION 1: Header */}
        <div>
          <p style={{ fontSize: "15px", fontWeight: 600, margin: 0 }}>
           {batchInfo?.header}
          </p>
        </div>

        {/* SECTION 2: Exception Name */}
        <div>
          <p
            className="exception-name"
          >
            Exception Name
          </p>
          <p
            style={{
              fontSize: "12.5px",
              fontWeight: 300,
              marginBottom: "0.6em",
            }}
          >
             {batchInfo?.exceptionName}
          </p>
        </div>

        {/* SECTION 3: Exception Summary */}
        <div>
          <p
            className="exception-summary"
          >
            Exception Summary
          </p>
          <ul
            style={{
              fontSize: "12px",
              paddingLeft: "1em",
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.4em",
            }}
          >
            {batchInfo?.exceptionSummary?.map((x)=>{
              return (<li style={x.highlight==true?{ color: "red"}:null}>
                  {x.text}
              </li>)
            })}
           
            
          </ul>
        </div>

        {/* SECTION 4: Exception Details */}
        <div>
          <p
           className="exception-details"
          >
            Exception Details
          </p>
          <ul
           className="exception-details-content"
          >
             <li>
              Alarm Code: {batchInfo?.exceptionDetails?.alarmCode}
            </li>
            <li>
              Equipment: {batchInfo?.exceptionDetails?.equipment}
            </li>
            <li>
              Type: {batchInfo?.exceptionDetails?.type}
            </li>
            <li>
              Timestamp: {batchInfo?.exceptionDetails?.timestamp}
            </li>
          </ul>
        </div>
      </div>


      {/* Right Side - Image */}
      <div style={{ flexShrink: 0 }} className="image-wrapper">
        <img
          src={bot} // Replace with your actual image URL
          alt="Alarm Chart"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "4px"

          }}
        />
      </div>
    </>
  );
};

export default BatchDeatilsAlertCard;
