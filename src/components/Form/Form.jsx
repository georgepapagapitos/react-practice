import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Form() {
  const history = useHistory();
  const defaultFormData = { title: '', body: '', userId: 1 }
  const [formData, setFormData] = useState(defaultFormData);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { title, body } = formData;

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
    setFormData(defaultFormData);
  };

  const onChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }));
  };

  return (
    <>
      <h2>Form</h2>
      <p>Create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <label htmlFor="content">Content</label>
        <input type="text" id="body" value={body} onChange={onChange} />
        <br />
        <label htmlFor="submit">Submit</label>
        <button type="submit" id="submit">Submit</button>
      </form>

      {error && <p>Could not submit post, try again later...</p>}
      {success && <p>Post successfully submitted</p>}
      <button onClick={() => history.goBack()}>Go Back</button>
    </>
  );
};