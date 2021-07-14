import MultipliedCalculations from '../MultipliedCalculations/MultipliedCalculations';
import { setCount } from '../../redux/slices/countSlice';
import { useDispatch } from 'react-redux';

export default function CalculationOverview() {

  const dispatch = useDispatch();

  return (
    <>
      <MultipliedCalculations />
      <button onClick={(e) => dispatch(setCount(100))}>Set number to multiply to 100</button>
    </>
  );
};
