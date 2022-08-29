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

export const useChildren = (id) => {
  const { data, error } = useSWR(`/api/children/${id}`, fetcher);
  return {
    children: data,
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

export const useRecents = () => {
  const { data, error } = useSWR('/api/matter_recentries', fetcher);
  return {
    recents: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const usePrior = (createdAt) => {
  const { data, error } = useSWR('/api/priorid?createdAt=' + createdAt, fetcher);
  return {
    prior: data,
    isLoading: !error && !data,
    isError: error
  };
};

export const useNext = (createdAt) => {
  const { data, error } = useSWR('/api/nextid?createdAt=' + createdAt, fetcher);
  return {
    next: data,
    isLoading: !error && !data,
    isError: error
  };
};