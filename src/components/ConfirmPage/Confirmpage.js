import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Confirmpage = () => {
  return (
    <>
      <div
        className="card bg-dark mt-5 "
        style={{ width: "45rem", marginLeft: "20rem" }}
      >
        <h3 className="card-header text-light Cardtop">
          Congratulations{" "}
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
        </h3>

        <div
          className="card-body"
          style={{ backgroundColor: "rgb(169 47 51)" }}
        >
          <h5 className="card-text text-light">
            Thanks for choosing Us😇 <br />
            Our Executive Will Reach you soon.... <br />
            Please Be ready with your all documents which need to be submitted.
            <br />
            Thank you..
          </h5>
        </div>
      </div>
    </>
  );
};

export default Confirmpage;
