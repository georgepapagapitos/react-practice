import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
  const history = useHistory();

  const data = 12345;

  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => history.push('/posts', { data })}>go to posts</button>
      <Link to="/form">Go to form (link)</Link>
    </>
  );
};