import React, { useState, useEffect } from "react";
import * as api from "../api";

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
    setLoading(false);
  }, [lines]);

  console.log(loading);

  if (loading) {
    return <h2>Loading...</h2>;
  } else if (lines) {
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
                <tr>
                  <td>{line.name}</td>
                  <td>Status goes here</td>
                  <td>Link</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return <p>Shit went wrong yo</p>;
  }
}
