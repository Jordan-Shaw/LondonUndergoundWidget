import React, { useState, useEffect } from "react";
import * as api from "../api";
import LineCard from "./LineCard";

export default function LineList() {
  const [loading, setLoading] = useState(true);
  // const [updateRequired, setUpdateRequired] = useState(true);
  const [lines, setLines] = useState();

  // api request on render
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


  // update loading once response from api request received and assigned
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
        <table className="tableBodyScroll">
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
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
