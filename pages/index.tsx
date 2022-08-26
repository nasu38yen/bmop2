import * as React from 'react';
import Grid from '@mui/material/Grid';
import Layout from '../layout/Layout';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';

const mainFeaturedPost = {
  title: 'B.M.O.P',
  description:
    'Build My Own Pyramid - 自分の墓は自分で建てよう！ ひとつひとつ墓石を積むように毎日を過ごしていければいいのかなあと',
  image: '/api/image/tumuishi.jpg',
  imageText: 'サルディーニャ島',
  linkText: 'つづき…',
};

const featuredPosts = [
  {
    title: '人は仏になれるのか？',
    date: '2021-08-09',
    description:
      '執着が人を苦しめる...仏さまのお話しはそれはよくわかります。問題はそのあとでしょう。ぶっちゃけ、人はいくらがんばっても仏にはなれないんじゃない？？',
    image: '/api/image/torajiro.jpg',
    imageLabel: 'Image Text',
    to: '/blog/8yWvMpDQ',
  },
  {
    title: '迷走ライド',
    date: '2021-09-24',
    description:
      '迷ってみたから迷ってたとわかるわけで、迷わなければ何もわかることはないのではないだろうか。そうかもしれないしそうじゃないかもしれない！を探しにでかけよう',
    image: '/api/image/rokugousaki.jpg',
    imageLabel: 'Image Text',
    to: '/blog/PbAR7Kb2',
  },
];

const Home = () => {
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
    </>
  );
};

Home.getLayout = (page) => <Layout>{page}</Layout>;

export default Home;
