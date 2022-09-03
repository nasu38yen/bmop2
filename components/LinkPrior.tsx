import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { usePrior } from '../utils/dataSWR';

const LinkPrior = ({ blog }) => {
  const { prior, isLoading, isError } = usePrior(blog.createdAt);
  if (isError || isLoading) return <Link></Link>;
  return (
    <NextLink href={'/blog/' + prior.id} passHref>
      <Link>前ページ</Link>
    </NextLink>
  );
};

export default LinkPrior;
