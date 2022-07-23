import { useRouter } from 'next/router';
import { useBlog } from '../../utils/dataSWR';
import Blog from '../../components/blog';

const Post = () => {
  const router = useRouter();
  const { bid } = router.query;
  const { blog, isLoading, isError } = useBlog(bid);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Blog blog={blog} />;
};

export default Post;
