import React, { useContext } from 'react';
import { InputValueContext } from '../../context/InputValueContext';

export default function Input() {

  const { dispatch } = useContext(InputValueContext);

  return (
    <>
      <h1>Multiplied by two app</h1>
      <input type="number" onChange={(e) => dispatch({ type: 'SET_INPUT_VALUE' })} />
    </>
  );
};