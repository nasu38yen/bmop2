import { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const getParent = async (post, posts) => {
  if (!post.parentId) {
    return posts;
  }
  const res = await fetch('/api/matter/' + post.parentId);
  const data = await res.json();
  posts.unshift(data);
  return await getParent(data, posts);
};

const BlogBread = ({ blog }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getParent(blog, []).then((posts) => setPosts(posts));
  }, []);

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {posts.map((parent) => (
        <Link
          key={parent.id}
          underline="hover"
          color="inherit"
          href={'/blog/' + parent.id}
        >
          {parent.title}
        </Link>
      ))}
      <Typography color="text.primary">{blog.title}</Typography>
    </Breadcrumbs>
  );
};
export default BlogBread;
