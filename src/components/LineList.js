import React, { useState } from "react";
import * as api from "../api"

export default function LineList() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {setLoading(false)}, 5000)
  api.getLineStatuses().then(() => {
    console.log("api request made")
  })


  if (loading) {
    return <h2>Loading...</h2>;
  } else {
    return <div className="lineList"></div>;
  }
}
