import { useQuery } from "@tanstack/react-query";
import { axiosAccess } from "../../api/axiosInstance";
import { END_POINT } from "../../constants/endPoint";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";


const fetchAPI = async (gameId: number) => {
  const res = await axiosAccess.get(`${END_POINT.GAME_USER.RATE_MANNER}/${gameId}`);
  return res.data;
};

const useGetMannerRatingQuery = (gameId: number) => {
  const queryClient= useQueryClient()
  const {
    data: rateManner,
    isLoading: rateMannerIsLoading,
    isSuccess: rateMannerIsSuccess,
    isError: rateMannerIsError,
  } = useQuery({
    queryKey: [QUERY_KEYS.GET_MANNER_USER_LIST, gameId],
    queryFn: () => fetchAPI(gameId),
  });

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_MANNER_USER_LIST] });
  }, [queryClient]);

  return {
    rateManner,
    rateMannerIsLoading,
    rateMannerIsSuccess,
    rateMannerIsError,
  };
};

export default useGetMannerRatingQuery