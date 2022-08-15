import Grid from '@mui/material/Grid';
import BlogMain from './BlogMain';
import BlogSidebar from './BlogSidebar';

const Blog = ({ blog }) => {
  return (
    <Grid container spacing={5} sx={{ mt: 3 }}>
      <BlogMain blog={blog} />
      <BlogSidebar />
    </Grid>
  );
};

export default Blog;
