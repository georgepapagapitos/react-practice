import { useState, useEffect } from "react";
import axios from 'axios';

export default function Posts() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Could not fetch posts, try again later...</p>}
      {data && data.map((post) => {
        const { id, title, body } = post;
        return (
          <article key={id}>
            <h1>{title}</h1>
            <p>{body}</p>
          </article>
        )
      })}
    </>
  );
};