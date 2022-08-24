import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useRecents } from '../utils/dataSWR';
import { format } from 'date-fns';

const BlogSidebar = () => {
  const { recents, isLoading, isError } = useRecents();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom>
        最近のノート
      </Typography>
      <List>
        {recents.map((post) => (
          <ListItem
            key={post.id}
            disableGutters
            divider
            button
            component={Link}
            href={'/blog/' + post.id}
          >
            <ListItemText
              primary={post.title}
              secondary={format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm')}
            />
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default BlogSidebar;
