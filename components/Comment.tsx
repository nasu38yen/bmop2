import { DiscussionEmbed } from 'disqus-react';

const Comment = ({ blog }) => {
  return (
    <DiscussionEmbed
      shortname="bmop2"
      config={{
        url: window.location.href,
        identifier: blog.id,
        title: blog.title,
        language: 'ja-JP',
      }}
    />
  );
};

export default Comment;
