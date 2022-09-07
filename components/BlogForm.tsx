import Grid from '@mui/material/Grid';
import { Button, Container, Stack, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';

type Matter = {
  title: string;
  text: string;
  author: string;
  parentId: string;
  id: string;
};

const BlogForm = ({ blog }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Matter>();

  const onSubmit: SubmitHandler<Matter> = (data) => console.log(data);

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
          <TextField
            required
            label="タイトル"
            {...register('title')}
            defaultValue={blog.title}
          />
          <TextField
            required
            label="お名前"
            {...register('text')}
            defaultValue={blog.text}
            multiline
            rows={20}
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
