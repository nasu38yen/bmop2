import Grid from '@mui/material/Grid';
import BlogMain from './BlogMain';
import BlogSidebar from './BlogSidebar';

const Blog = ({ blog }) => {
  return (
    <Grid container spacing={5} sx={{ mt: 0 }}>
      <BlogMain blog={blog} />
      <BlogSidebar blog={blog} />
    </Grid>
  );
};

export default Blog;
