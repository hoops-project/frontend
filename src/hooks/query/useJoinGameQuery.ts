import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosAccess } from "../../api/axiosInstance";
import { END_POINT } from "../../constants/endPoint";
import useToast from "../useToast";
import { QUERY_KEYS } from "../../constants/queryKeys";

const fetchAPI = async (gameId: string) => {
  const res = await axiosAccess.post(`${END_POINT.GAME_USER.GAME_IN_OUT}`,{ gameId });
  return res.data;
};

const useJoinGameQuery = () => {
  const navigate = useNavigate();
  const { toastSuccess } = useToast();


  const { mutate: joinGame } = useMutation({
    mutationKey: [QUERY_KEYS.JOIN_GAME],
    mutationFn: (gameId: string) => fetchAPI(gameId),
    onSuccess: (data,variables) => {
      toastSuccess("경기 참가 신청이 완료되었습니다🏀");
      navigate(`/detail/${variables}`);
    },
  });

  return { joinGame };
};

export default useJoinGameQuery;