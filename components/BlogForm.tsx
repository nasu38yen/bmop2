import Grid from '@mui/material/Grid';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Matter = {
  title: string;
  text: string;
  author: string;
  parentId: string;
  id: string;
};

const schema = yup.object({
  title: yup.string().required('必須だよ'),
  text: yup.string().required('必須だよ'),
  author: yup.string().required('必須だよ'),
});

const postMatter = async (data) => {
  data.updatedAt = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  if (!data.createdAt) {
    data.createdAt = data.updatedAt;
  }

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
  await fetch('/api/matter', options);
};

const BlogForm = ({ blog }) => {
  // console.log(blog);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Matter>({ defaultValues: blog, resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<Matter> = (data) => {
    // console.log(data);
    postMatter(data).then(() => router.push('/blog/' + blog.id));
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <TextField label="親ノートID" {...register('parentId')} />
          <TextField
            label="ID"
            {...register('id')}
            error={'id' in errors}
            helperText={errors.id?.message}
          />
          <TextField
            label="編集者"
            {...register('author')}
            error={'author' in errors}
            helperText={errors.author?.message}
          />
          <TextField
            required
            label="タイトル"
            {...register('title')}
            error={'title' in errors}
            helperText={errors.title?.message}
          />
          <TextField
            required
            label="記事"
            multiline
            rows={20}
            {...register('text')}
            error={'text' in errors}
            helperText={errors.text?.message}
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            onClick={handleSubmit(onSubmit)}
          >
            登録
          </Button>
        </Stack>
      </form>
    </Grid>
  );
};

export default BlogForm;
