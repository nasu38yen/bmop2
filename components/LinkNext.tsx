import NextLink from 'next/link';
import Link from '@mui/material/Link';
import { useNext } from '../utils/dataSWR';

const LinkNext = ({ blog }) => {
  const { next, isLoading, isError } = useNext(blog.createdAt);
  if (isError || isLoading) return <Link></Link>;
  return (
    <NextLink href={'/blog/' + next.id} passHref>
      <Link>次ページ</Link>
    </NextLink>
  );
};

export default LinkNext;
