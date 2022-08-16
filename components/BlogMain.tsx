import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import LinkPrior from './LinkPrior';
import LinkNext from './LinkNext';
import DisqusComment from './DisqusComment';

const BlogMain = ({ blog }) => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {blog.title}
      </Typography>
      <Divider />
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            <img style={{ maxWidth: '100%' }} {...props} />
          ),
        }}
      >
        {blog.text}
      </ReactMarkdown>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Typography>登録：{blog.createdAt}</Typography>
        <Typography>更新：{blog.updatedAt}</Typography>
        <Typography>by {blog.author}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <LinkPrior blog={blog} />
        <LinkNext blog={blog} />
      </Stack>
      <Box>
        <Typography>{window.location.href}</Typography>
        <DisqusComment blog={blog} />
      </Box>
    </Grid>
  );
};

export default BlogMain;
