import ReactMarkdown from 'react-markdown';

const Blog = ({ blog }) => {
  return (
    <div>
      <div>Post: {blog.id}</div>
      <div>{blog.title}</div>
      <ReactMarkdown>{blog.text}</ReactMarkdown>
    </div>
  );
};

export default Blog;
