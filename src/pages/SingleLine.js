import React, { useState, useEffect } from "react";
import * as api from "../api";
import logo from "../logo.svg";
import { useNavigate } from "@reach/router";
import UpdateTime from "../components/UpdateTime";
import RefreshButton from "../components/RefreshButton";

const { checkLineStatuses } = require("../utils.js");

export default function SingleLine(props) {
  const [loading, setLoading] = useState(true);
  const [lineData, setLineData] = useState();
  const { id } = props;
  const navigate = useNavigate();
  let lineStatusIndex;

  useEffect(() => {
    async function fetchData() {
      try {
        if (loading) {
          console.log("sent request");
          const response = await api.getSingleLineStatus(id);
          console.log("response received", response);
          setLineData(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [id, loading]);

  useEffect(() => {
    if (typeof lineData === "object") {
      setLoading(false);
    }
  }, [lineData]);

  let content;

  if (loading) {
    content = (
      <div className="lineContentContainer">
        <h2>Loading...</h2>;
      </div>
    );
  } else {
    lineStatusIndex = checkLineStatuses(lineData[0]);
    const { statusSeverityDescription, reason } = lineData[0].lineStatuses[
      lineStatusIndex
    ];

    content = (
      <div className="lineContentContainer">
        <h1>{lineData[0].name}</h1>
        <h2>{statusSeverityDescription}</h2>
        <p className="reason">{reason}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="singleLineBackground"> </div>
      <div className="singleLinePage">
        <div className="travelHeader">
          <img src={logo} alt="Widget Logo" className="logo" />
        </div>
        <div className="singleLinePageContentContainer">
          <div className="updateContainer">
            <UpdateTime loading={loading} />
            <RefreshButton setLoading={setLoading} />
          </div>
          {content}
          <button
            className="navigateButton"
            onClick={() => {
              navigate("/travel");
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
