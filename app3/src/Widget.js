import React from "react";
import moment from "moment";

export default function Widget() {
  return (
    <div style={{
      borderRadius: '4px',
      padding: '2em',
      backgroundColor: 'rgba(58,63,68,0.5)',
      color: 'white'
    }}>
      <h2 style={{
      color: 'white'
    }}>App 3 Widget</h2>
      <p>Using <strong>momentjs</strong> for format the date</p>
      <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  )
}

