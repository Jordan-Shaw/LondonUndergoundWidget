import React from "react";
import { Link } from "@reach/router";
const { checkLineStatuses } = require("../utils.js");

export default function LineCard(props) {
  const { line } = props;
  const {name, lineStatuses, id} = line
  const lineStatusIndex = checkLineStatuses(line);

  return (
    <tr className="lineCard">
      <td id={id} className="lineName">
        {name}
      </td>
      <td>{lineStatuses[lineStatusIndex].statusSeverityDescription}</td>
      <td>
        <Link to={`${id}`}>Click here</Link>
      </td>
    </tr>
  );
}
