import { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Posts({ error, setError, setSuccess }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  console.log('data from dashboard', history.location.state);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    }
    fetchPosts();
  }, [setError]);

  const onClick = async (id) => {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log(response.status);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Could not fetch posts, try again later...</p>}
      {data && data.map((post) => {
        const { id, title, body } = post;
        return (
          <article key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={() => onClick(id)}>delete</button>
          </article>
        )
      })}
    </>
  );
};