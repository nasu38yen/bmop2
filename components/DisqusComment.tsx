import { DiscussionEmbed } from 'disqus-react';
const DisqusComment = ({ blog }) => {
  const disqusShortname = 'bmop2';
  const siteUrl = 'https://bmop2.peace2.jp/blog';
  return (
    <DiscussionEmbed
      shortname={disqusShortname}
      config={{
        url: `${siteUrl}/${blog.id}`,
        identifier: `#${blog.id}`,
        title: `#${blog.title}`,
        language: 'ja-JP',
      }}
    />
  );
};
export default DisqusComment;
