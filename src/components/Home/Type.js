import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Support Specialist @ Coca-Cola Beverages Africa",
          "ServiceNow ITSM & Endpoint Support",
          "Network Troubleshooter",
          "Cybersecurity Enthusiast",
          "Freelance IT Support",
          "Tech Problem Solver"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
