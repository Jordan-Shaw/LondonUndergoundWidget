import React, { useEffect, useState } from "react";

export default function UpdateTime(props) {
  const [updateTimestamp, setUpdateTimestamp] = useState();
  const { loading } = props;

  useEffect(() => {
    if (!loading) {
      let currentDate = new Date();
      let timestamp = currentDate.getTime();
      let dateTime = new Date(timestamp);

      setUpdateTimestamp(`${dateTime}`);
    }
  }, [loading]);

  return (
    <div id="lastUpdated">
      <p>Last updated: {updateTimestamp}</p>
    </div>
  );
}
