import React from 'react';
import { useSelector } from 'react-redux';

export default function MultipliedByTwo() {

  const count = useSelector(state => state.count.value);

  return (
    <p>multiplied number: {count * 2}</p>
  );
};