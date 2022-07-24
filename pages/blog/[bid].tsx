import { useRouter } from 'next/router';
import { useBlog } from '../../utils/dataSWR';
import Blog from '../../components/blog';
import Layout from '../../layout/Layout';

const Post = () => {
  const router = useRouter();
  const { bid } = router.query;
  const { blog, isLoading, isError } = useBlog(bid);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Blog blog={blog} />;
};

Post.getLayout = (page) => <Layout>{page}</Layout>;

export default Post;
