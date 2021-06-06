import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(e => (
        <div className="blog-preview" key={e.id}>
          <Link to={`/blogs/${e.id}`}>
            <h2>{e.title}</h2>
            <p>written by {e.author}</p>
          </Link>
          {/* <button onClick={() => handleDelete(e.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
