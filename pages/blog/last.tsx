import { useLastBlog } from '../../utils/dataSWR';
import Blog from '../../components/Blog';
import Layout from '../../layout/Layout';

const Post = () => {
  const { blog, isLoading, isError } = useLastBlog();
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Blog blog={blog} />;
};

Post.getLayout = (page) => <Layout>{page}</Layout>;

export default Post;
