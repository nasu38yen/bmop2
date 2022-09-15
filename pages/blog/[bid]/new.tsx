import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useBlog } from '../../../utils/dataSWR';
import BlogForm from '../../../components/BlogForm';
import Layout from '../../../layout/Layout';
import Spinner from '../../../components/Spinner';
import Grid from '@mui/material/Grid';
import BlogSidebar from '../../../components/BlogSidebar';
import Hashids from 'hashids';

const getUID = async () => {
  const res = await fetch('/api/lastts');
  const lastUpdate = await res.json();
  const hashids = new Hashids('blue rose', 8);
  const uid = hashids.encode(lastUpdate._ts);
  return uid;
};

const getNewMatter = async (bid) => {
  const newMatter = {
    id: '',
    title: '',
    text: '',
    author: '',
    treeId: 'mine',
    parentId: '',
  };
  newMatter.id = await getUID();
  newMatter.parentId = bid;
  return newMatter;
};

const Append = () => {
  const router = useRouter();
  const { bid } = router.query;
  const [blog, setBlog] = useState({ id: '' });
  useEffect(() => {
    getNewMatter(bid).then((blog) => {
      setBlog(blog);
    });
  }, [bid]);

  // Stateがセットされてからフォームへ渡す
  if (blog.id === '') return <Spinner />;
  return (
    <Grid container spacing={5} sx={{ mt: 0 }}>
      <BlogForm blog={blog} />
      <BlogSidebar blog={blog} />
    </Grid>
  );
};

Append.getLayout = (page) => <Layout>{page}</Layout>;

export default Append;
