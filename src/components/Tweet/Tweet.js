import React from 'react'
import { useParams } from 'react-router-dom';

export default function Tweet() {

  const { tweetId } = useParams();

  return (
    <div>
      <p>Tweet id is {tweetId}</p>
    </div>
  );
};


