import './App.css';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Welcome from './components/Welcome/Welcome';

export default function App() {
  return (
    <center>
      <Welcome />
      <Counter />
      <Form />
      <Posts />
    </center>
  );
};