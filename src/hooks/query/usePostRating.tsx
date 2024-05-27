import { useMutation } from "@tanstack/react-query";
import { axiosAccess } from "../../api/axiosInstance";
import { END_POINT } from "../../constants/endPoint";
import useToast from "../useToast";
import { QUERY_KEYS } from "../../constants/queryKeys";

interface RatingPayload {
  gameId: number;
  receiverId: number;
  point: number;
}

const fetchAPI = async ({ gameId, receiverId, point }: RatingPayload) => {
  const res = await axiosAccess.post(`${END_POINT.GAME_USER.RATE_MANNER}`, { gameId, receiverId, point });
  return res.data;
};

const usePostRatingQuery = () => {
  const { toastSuccess } = useToast();

  const { mutate: postRate } = useMutation({
    mutationKey: [QUERY_KEYS.RATE_MANNER],
    mutationFn: fetchAPI,
    onSuccess: () => {
      toastSuccess("매너점수 평가가 완료되었습니다!🏀");
    },
  });

  return { postRate };
};

export default usePostRatingQuery;