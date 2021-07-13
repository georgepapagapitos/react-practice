import axios from 'axios';
import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);

  const onChange = (event) => setFile(event.target.files[0]);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post("www.google.com", formData);
    console.log(response);
  };

  return (
    <>
      <h2>File Upload</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="file">Image Upload</label>
        <br />
        <input type="file" id="file" accept=".jpg,.png" onChange={onChange} />
        <br />
        <button type="submit">Upload File</button>
      </form>
    </>
  );
};