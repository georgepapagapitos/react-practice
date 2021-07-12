import { useState } from 'react';

export default function Form() {

  const defaultFormData = { title: '', content: '' }

  const [formData, setFormData] = useState(defaultFormData);

  const { title, content } = formData;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
      <h1>form</h1>
      <p>create a post</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">title</label>
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <label htmlFor="content">content</label>
        <input type="text" id="content" value={content} onChange={onChange} />
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );

};