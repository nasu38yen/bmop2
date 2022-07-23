import { useLastBlog } from '../../utils/dataSWR';
import Blog from '../../components/blog';

const Post = () => {
  const { blog, isLoading, isError } = useLastBlog();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Blog blog={blog} />;
};

export default Post;
