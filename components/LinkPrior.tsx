import Link from '@mui/material/Link';
import { usePrior } from '../utils/dataSWR';

const LinkPrior = ({ blog }) => {
  const { prior, isLoading, isError } = usePrior(blog.createdAt);
  if (isError || isLoading) return <Link></Link>;
  return <Link href={'/blog/' + prior.id}>前ページ</Link>;
};

export default LinkPrior;
