import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // Custom color theme
  const theme = {
    light: ["#161b22", "#6b21a8", "#7e22ce", "#9333ea", "#a855f7"], // shades of purple
    dark: ["#0d1117", "#6b21a8", "#7e22ce", "#9333ea", "#a855f7"]
  };

  // Limit to last 6 months
  const selectLastSixMonths = (contributions) => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    return contributions.filter(day => new Date(day.date) > sixMonthsAgo);
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Alvine-chungo969"
        blockSize={15}
        blockMargin={5}
        theme={theme}
        fontSize={16}
        transformData={selectLastSixMonths}
      />
    </Row>
  );
}

export default Github;
