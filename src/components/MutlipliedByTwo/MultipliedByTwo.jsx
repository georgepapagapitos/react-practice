import React, { useContext } from 'react'
import { InputValueContext } from '../../context/InputValueContext';

export default function MultipliedByTwo() {

  const { state } = useContext(InputValueContext);

  console.log('state', state)

  return (
    <p>multiplied number: {state.inputValue * 2}</p>
  );
};