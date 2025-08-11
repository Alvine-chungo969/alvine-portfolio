import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "IT Support Specialist",
          "Cybersecurity Enthusiast",
          "Network Troubleshooter",
          "System Optimizer",
          "Helpdesk Solutions Builder",
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
