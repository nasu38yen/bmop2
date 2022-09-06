import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown';
import LinkPrior from './LinkPrior';
import LinkNext from './LinkNext';
import DisqusComment from './DisqusComment';
import CodeBlock from './CodeBlock';
import { format } from 'date-fns';
import BlogBread from './BlogBread';
import Link from '@mui/material/Link';
import NextLink from 'next/link';

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
      <Box mb={2}>
        <BlogBread blog={blog} />
      </Box>
      <Typography variant="h5" gutterBottom>
        {blog.title}
      </Typography>
      <Divider />
      <ReactMarkdown
        components={{
          code: CodeBlock,
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
        <Typography>
          登録：{format(new Date(blog.createdAt), 'yyyy-MM-dd HH:mm')}
        </Typography>
        <Typography>
          更新：{format(new Date(blog.updatedAt), 'yyyy-MM-dd HH:mm')}
        </Typography>
        <Typography>by {blog.author}</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        <LinkPrior blog={blog} />
        <LinkNext blog={blog} />
        <NextLink href={'/blog/' + blog.id + '/edit'} passHref>
          <Link>編集</Link>
        </NextLink>
      </Stack>
      <Box mt={2}>
        <DisqusComment blog={blog} />
      </Box>
    </Grid>
  );
};

export default BlogMain;
