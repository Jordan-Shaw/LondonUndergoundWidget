import React, { useRef } from "react";
const { checkLineStatuses } = require("../utils.js");

export default function LineCard(props) {
  const { line } = props;
  const lineStatusIndex = useRef(checkLineStatuses(line));
  console.log("lineStatusIndex.current", lineStatusIndex.current);

  console.log(line);
  return (
    <tr>
      <td>{line.name}</td>
      <td>
        {line.lineStatuses[lineStatusIndex.current].statusSeverityDescription}
      </td>
      <td>Link</td>
    </tr>
  );
}
