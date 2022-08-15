import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useRecents } from '../utils/dataSWR';

const BlogSidebar = () => {
  const { recents, isLoading, isError } = useRecents();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Archives
      </Typography>
      {recents.map((post) => (
        <Link
          display="block"
          variant="body1"
          href={'/blog/' + post.id}
          key={post.id}
        >
          {post.title}
        </Link>
      ))}
    </Grid>
  );
};

export default BlogSidebar;
