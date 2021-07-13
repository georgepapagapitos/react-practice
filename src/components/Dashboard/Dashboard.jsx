import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Input from '../Input/Input';
import MultipliedByTwo from '../MutlipliedByTwo/MultipliedByTwo';
import CalculationOverview from '../CalculationOverview/CalculationOverview';
import MultipliedCalculations from '../MultipliedCalculations/MultipliedCalculations';

export default function Dashboard() {

  const history = useHistory();

  const data = 12345;

  const [inputValue, setInputValue] = useState(0);

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => history.push('/posts', { data })}>go to posts</button>
      <Link to="/form">Go to form (link)</Link>
      <Input setInputValue={setInputValue} />

      <CalculationOverview>
        <MultipliedCalculations>
          <MultipliedByTwo inputValue={inputValue} />
        </MultipliedCalculations>
      </CalculationOverview>

    </>
  );
};