import React from 'react';

export default function Input({ setInputValue }) {
  return (
    <>
      <h1>Multiplied by two app</h1>
      <input type="number" onChange={(event) => setInputValue(event.target.value)} />
    </>
  );
};