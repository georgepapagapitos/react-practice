import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../Input/Input';
import CalculationOverview from '../CalculationOverview/CalculationOverview';
import { InputValueProvider } from '../../context/InputValueContext';

export default function Dashboard() {

  const history = useHistory();

  const data = 12345;

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => history.push('/posts', { data })}>go to posts</button>
      <Link to="/form">Go to form (link)</Link>

      <InputValueProvider>
        <Input />
        <CalculationOverview />
      </InputValueProvider>
    </>
  );
};