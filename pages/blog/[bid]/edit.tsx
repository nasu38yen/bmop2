import { useRouter } from 'next/router';
import { useBlog } from '../../../utils/dataSWR';
import BlogForm from '../../../components/BlogForm';
import Layout from '../../../layout/Layout';
import Spinner from '../../../components/Spinner';
import Grid from '@mui/material/Grid';
import BlogSidebar from '../../../components/BlogSidebar';

const Edit = () => {
  const router = useRouter();
  const { bid } = router.query;
  const { blog, isLoading, isError } = useBlog(bid);
  if (isError) return <div>failed to load</div>;
  if (isLoading) return <Spinner />;
  return (
    <Grid container spacing={5} sx={{ mt: 0 }}>
      <BlogForm blog={blog} />
      <BlogSidebar blog={blog} />
    </Grid>
  );
};

Edit.getLayout = (page) => <Layout>{page}</Layout>;

export default Edit;
