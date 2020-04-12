import React, { useState, useEffect } from "react";
import * as api from "../api";
import LineCard from "./LineCard";

export default function LineList() {
  const [loading, setLoading] = useState(true);
  // const [updateRequired, setUpdateRequired] = useState(true);
  const [lines, setLines] = useState();

  useEffect(() => {
    console.log("sent request");
    async function fetchData() {
      try {
        const response = await api.getLineStatuses();
        console.log("response received", response);
        setLines(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof lines === "object") {
      setLoading(false);
    }
  }, [lines]);

  console.log(loading);

  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <div className="lineList">
        <table>
          <thead>
            <tr>
              <th>Line</th>
              <th>Status</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            {lines.map((line) => {
              return (
                <LineCard line={line} key={line.id} />
                // <tr>
                //   <td>{line.name}</td>
                //   <td>Status goes here</td>
                //   <td>Link</td>
                // </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
