import { axiosAccess } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import { useEffect } from 'react';

const fetchAPI = async (page: number, size: number) => {
  const res = await axiosAccess.get(END_POINT.GAME_USER.PAST_GAME_LIST, {
    params: {
      page: 1,
      size: 2,
    },
  });
  return res.data;
};

const useGetMyLastGameListQuery = () => {
  const queryClient = useQueryClient();
  
  const {
    data: myLastGameListData,
    fetchNextPage: myLastGameListFetchNextPage,
    hasNextPage: myLastGameListHasNextPage,
    refetch: myLastGameListRefetch,
    isLoading: myLastGameListIsLoading,
    isFetching: myLastGameListIsFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_MY_LAST_GAME],
    queryFn: ({ pageParam = 0 }) => fetchAPI(pageParam, 10),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pageable.pageNumber + 1;
      return lastPage.last ? undefined : nextPage;
    },
    initialPageParam: 0,
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_MY_LAST_GAME] });
  }, [queryClient]);

  return {
    myLastGameListData,
    myLastGameListFetchNextPage,
    myLastGameListHasNextPage,
    myLastGameListRefetch,
    myLastGameListIsLoading,
    myLastGameListIsFetching,
  };
};

export default useGetMyLastGameListQuery;
