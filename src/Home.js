// import { useState } from "react";

// const Home = () => {
//   const [name, setName] = useState("bambang");
//   const [age, setAge] = useState(20);

//   const handleClick = () => {
//     console.log("hello, bambang", e);
//     setName("asep");
//     setAge(30);
//   };

//   const handleClickAgain = (name, e) => {
//     console.log(`hello, ${name}`, e.target);
//   };

//   return (
//     <div className="home">
//       <h2>Homepage</h2>
//       <p>
//         {name} is {age} years old
//       </p>
//       <button onClick={handleClick}>Click me</button>
//       <button onClick={e => handleClickAgain("asep", e)}>Click me again</button>
//     </div>
//   );
// };

// export default Home;

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";

// const Home = () => {
//   const [blogs, setBlogs] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // const handleDelete = id => {
//   //   const newBlogs = blogs.filter(e => e.id !== id);
//   //   setBlogs(newBlogs);
//   // };

//   useEffect(() => {
//     fetch("http://localhost:8000/blogs")
//       .then(res => {
//         if (!res.ok) {
//           throw Error("could not fetch the data for that resource");
//         }
//         return res.json();
//       })
//       .then(e => {
//         setBlogs(e);
//         setIsLoading(false);
//         setError(null);
//       })
//       .catch(e => {
//         setError(e.message);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="home">
//       {isLoading && <div>Loading....</div>}
//       {error && <div>{error}</div>}
//       {blogs && (
//         <BlogList
//           blogs={blogs}
//           title={"All Blogs!"}
//           // handleDelete={handleDelete}
//         />
//       )}
//       {/* <BlogList
//         blogs={blogs.filter(e => e.author === "mario")}
//         title={"Mario's Blogs!"}
//       /> */}
//     </div>
//   );
// };

// export default Home;

import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isLoading,
    error
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {isLoading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs!"} />}
    </div>
  );
};

export default Home;
