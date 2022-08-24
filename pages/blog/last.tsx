import { useLastBlog } from '../../utils/dataSWR';
import Layout from '../../layout/Layout';
import Blog from '../../components/blog';
import Spinner from '../../components/Spinner';

const Post = () => {
  const { blog, isLoading, isError } = useLastBlog();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;

  return <Blog blog={blog} />;
};

Post.getLayout = (page) => <Layout>{page}</Layout>;

export default Post;
