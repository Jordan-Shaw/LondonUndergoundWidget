import React from 'react'

export default function RefreshButton(props) {
  const {setLoading} = props

  return (
    <button
      id="refreshButton"
      onClick={() => {
        setLoading(true);
      }}
    >
      Refresh
    </button>
  );
}
