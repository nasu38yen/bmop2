import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useChildren } from '../utils/dataSWR';
import { format } from 'date-fns';

const Children = ({ blog }) => {
  const { children, isLoading, isError } = useChildren(blog.id);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <Typography variant="h6" gutterBottom style={{ fontWeight: 600 }}>
        子ノート
      </Typography>
      <List>
        {children.map((post) => (
          <ListItem
            key={post.id}
            disableGutters
            disablePadding
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
    </>
  );
};

export default Children;
