import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("asep");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  console.log("🚀 ~ file: Create.js ~ line 10 ~ Create ~ history", history);

  const handleSubmit = e => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author
    };

    setIsLoading(true);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      //   history.go(-1); // untuk mundur 1 screen page ke posisi terakhir sebelum nya
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <label>Blog Body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <label>Blog Author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="asep">asep</option>
          <option value="bambang">bambang</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
