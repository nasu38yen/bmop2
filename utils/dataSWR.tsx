import useSWR from "swr";

const fetcher: any = (url: string) => fetch(url).then((res) => res.json());

export const useBlog = (id) => {
    const { data, error } = useSWR(`/api/matter/${id}`, fetcher);
    return {
      blog: data,
      isLoading: !error && !data,
      isError: error
    };
};

export const useLastBlog = () => {
  const { data, error } = useSWR('/api/last', fetcher);
  return {
    blog: data,
    isLoading: !error && !data,
    isError: error
  };
};