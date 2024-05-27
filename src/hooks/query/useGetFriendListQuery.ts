import { axiosAuth } from '../../api/axiosInstance.ts'
import { END_POINT } from '../../constants/endPoint.ts'
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import { QUERY_KEYS } from '../../constants/queryKeys.ts'
import { useEffect } from 'react';

const fetchAPI = async (page: number, size: number) => {
  const res = await axiosAuth.get(END_POINT.FRIENDS.FRIEND_LIST, {
    params: {
      page,
      size
    },
  });
  return res.data;
};

const useGetFriendsListQuery = () => {
  const queryClient = useQueryClient();
  
  const {
    data: friendsListData,
    fetchNextPage: friendsListFetchNextPage,
    hasNextPage: friendsListHasNextPage,
    refetch: friendsListRefetch,
    isLoading: friendsListIsLoading,
    isFetching: friendsListIsFetching,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.GET_FRIENDS_LIST],
    queryFn: ({ pageParam = 1 }) => fetchAPI(pageParam, 1),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1
      const maxPage = lastPage.totalPages
      return nextPage <= maxPage ? nextPage : undefined
    },

    initialPageParam: 1,
  })

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_FRIENDS_LIST] });
  }, [queryClient]);

  return {
    friendsListData,
    friendsListFetchNextPage,
    friendsListHasNextPage,
    friendsListRefetch,
    friendsListIsLoading,
    friendsListIsFetching,
  };
};

export default useGetFriendsListQuery;
