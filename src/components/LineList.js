import React, { useState, useEffect } from "react";
import * as api from "../api";
import LineCard from "./LineCard";
import UpdateTime from "./UpdateTime";
import RefreshButton from "./RefreshButton";
import anime from "animejs/lib/anime.es.js";

export default function LineList() {
  const [loading, setLoading] = useState(true);
  const [lines, setLines] = useState();

  // api request on render
  // if (loading) in place to make new request when refresh button used
  useEffect(() => {
    async function fetchData() {
      try {
        if (loading) {
          console.log("sent request");
          const response = await api.getLineStatuses();
          console.log("response received", response);
          setLines(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [loading]);

  // update loading once response from api request received and assigned
  useEffect(() => {
    if (typeof lines === "object") {
      setLoading(false);
    }
  }, [lines]);

  // LineCard animation on entry

  useEffect(() => {
    anime({
      targets: [".tableBodyScroll", ".lineCard"],
      opacity: 1,
      duration: 2000,
      delay: anime.stagger(100),
    });
  }, [loading]);

  let content;

  if (loading) {
    content = (
      <tbody>
        <tr>
          <td>Loading...</td>
          <td>Loading...</td>
          <td>Loading...</td>
        </tr>
      </tbody>
    );
  } else {
    content = (
      <tbody>
        {lines.map((line) => {
          return <LineCard line={line} key={line.id} className=".lineCard" />;
        })}
      </tbody>
    );
  }

  return (
    <div className="lineList">
      <UpdateTime loading={loading} />
      <RefreshButton setLoading={setLoading} />
      <table className="tableBodyScroll">
        <thead>
          <tr>
            <th className="lineName">Line</th>
            <th>Status</th>
            <th>More Info</th>
          </tr>
        </thead>
        {content}
      </table>
    </div>
  );
}
