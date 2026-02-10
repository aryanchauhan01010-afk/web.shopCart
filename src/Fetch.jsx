import React, { useEffect, useState } from "react";

function Fetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const Data = await res.json();

        setPosts(Data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts Data List</h1>

      {posts.map((posts) => (
        <div key={posts.id}>
          <p>{posts.userID}</p>
          <p>{posts.id}</p>
          <p>{posts.title}</p>
          <p>{posts.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
