import React, { useContext } from 'react';
import { InputValueContext } from '../../context/InputValueContext';
import MultipliedCalculations from '../MultipliedCalculations/MultipliedCalculations';

export default function CalculationOverview() {

  const { dispatch } = useContext(InputValueContext);

  return (
    <>
      <MultipliedCalculations />
      <button onClick={() => dispatch({ type: 'SET_INPUT_100' })}>Set number to multiply to 100</button>
    </>
  );
};
