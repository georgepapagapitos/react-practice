import './App.css';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Welcome from './components/Welcome/Welcome';
import axios from 'axios';

export default function App() {
  return (
    <center>
      <Welcome />
      <Counter />
      <Form />
    </center>
  );
};