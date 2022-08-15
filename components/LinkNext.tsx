import Link from '@mui/material/Link';
import { useNext } from '../utils/dataSWR';

const LinkNext = ({ blog }) => {
  const { next, isLoading, isError } = useNext(blog.createdAt);
  if (isError || isLoading) return <Link></Link>;
  return <Link href={'/blog/' + next.id}>次ページ</Link>;
};

export default LinkNext;
