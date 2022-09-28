import React, { useState } from "react";

const Form = ({ blogs, setBlogs }) => {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
  });

  const submit = (event) => {
    event.preventDefault();

    setBlog({
      title: "",
      body: "",
    });
    console.log("blogTitle:", blog.title);
    console.log("blogBody:", blog.body);
  };

  return (
    <form onSubmit={submit}>
      <div>
        title
        <input
          type="text"
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        />
      </div>
      <div>
        body
        <input
          type="textarea"
          value={blog.body}
          onChange={(e) => setBlog({ ...blog, body: e.target.value })}
        />
      </div>

      <button type="submit">Submit </button>
    </form>
  );
};

export default Form;
