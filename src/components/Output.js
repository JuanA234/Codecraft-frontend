import React from 'react';
import '../styles/Output.css';

function Output({ value }) {
  return (
    <textarea
      cols="35"
      rows="10"
      className="text-box"
      id="output-area"
      readOnly
      value={value}
    />
  );
}

export default Output;
