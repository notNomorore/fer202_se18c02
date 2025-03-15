import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/posts') // Lấy dữ liệu từ JSON Server
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error loading posts:', error));
  }, []);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
