import React from "react";
const { checkLineStatuses } = require("../utils.js");

export default function LineCard(props) {
  const { line } = props;
  const lineStatusIndex = checkLineStatuses(line);

  return (
    <tr>
      <td>{line.name}</td>
      <td>{line.lineStatuses[lineStatusIndex].statusSeverityDescription}</td>
      <td>Link</td>
    </tr>
  );
}
