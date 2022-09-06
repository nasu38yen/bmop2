import { useLastBlog } from '../../utils/dataSWR';
import Layout from '../../layout/Layout';
import Blog from '../../components/blog';
import Spinner from '../../components/Spinner';

const blog = {
  title: 'テスト',
  text: "# タイトル Paragraph～～～～ - 項目１ - 項目２ - 項目３ ~~~js console.log('It works!') ~~~",
  createdAt: '2022-09-04 00:26:44',
  updatedAt: '2022-09-04 00:30:14',
  author: 'aaaaa',
  id: 'aaaaaaa',
};

const Test = () => {
  return <Blog blog={blog} />;
};

Test.getLayout = (page) => <Layout>{page}</Layout>;

export default Test;
