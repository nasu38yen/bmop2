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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('title')} />
      <input {...register('text', { required: true })} />
      {errors.title && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default BlogForm;
