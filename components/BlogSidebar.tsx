import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Recentries from './Recentries';
import Children from './Children';

const BlogSidebar = ({ blog }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box>
        <Children blog={blog}></Children>
      </Box>
      <Box mt={2}>
        <Recentries></Recentries>
      </Box>
    </Grid>
  );
};

export default BlogSidebar;
