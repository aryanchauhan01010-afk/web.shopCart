// import React, {useEffect, useState} from "react";
// import axios from "axios"


// function Counter() {


//  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//         const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

//         setPosts(res.data);
     
//     };

//     fetchData();
//   },[]);

//   return (
//     <div>
//       <h1>Posts Data List</h1>

//       {posts.map((post) => (
//         // <div key={post.id}>
//           <p>{post.userID}</p>
//           <p>{post.id}</p>
//           <p>{post.title}</p>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// export default Counter;
