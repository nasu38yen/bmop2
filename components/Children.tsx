import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useChildren } from '../utils/dataSWR';
import { format } from 'date-fns';
import NextLink from 'next/link';

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
          <NextLink key={post.id} href={'/blog/' + post.id} passHref>
            <ListItem
              disableGutters
              disablePadding
              divider
              button
              component={Link}
            >
              <ListItemText
                primary={post.title}
                secondary={format(new Date(post.createdAt), 'yyyy-MM-dd HH:mm')}
              />
            </ListItem>
          </NextLink>
        ))}
      </List>
    </>
  );
};

export default Children;
