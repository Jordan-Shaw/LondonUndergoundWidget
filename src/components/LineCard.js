import React from "react";

export default function LineCard(props) {
  const { line } = props;
  console.log(line);
  return (
    <tr>
      <td>{line.name}</td>
      <td>Status goes here</td>
      <td>Link</td>
    </tr>
  );
}
