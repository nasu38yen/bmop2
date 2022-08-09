import ReactMarkdown from 'react-markdown';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Blog = ({ blog }) => {
  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        {blog.title}
      </Typography>
      <ReactMarkdown>{blog.text}</ReactMarkdown>
    </Box>
  );
};

export default Blog;
