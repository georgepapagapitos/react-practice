import { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import Welcome from './components/Welcome/Welcome';
import FileUpload from './components/FileUpload/FileUpload';
import ComponentA from './components/ComponentA';


export default function App() {

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <center>
      <Welcome />
      <Counter />
      <Form />
      <Posts error={error} setError={setError} setSuccess={setSuccess} />
      <FileUpload />
      <ComponentA />
    </center>
  );
};