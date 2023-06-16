"use client";
import React, { useState } from "react";

function Sample() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Sample</h1>
      <p>wowowowowowowowowow</p>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}

export default Sample;
