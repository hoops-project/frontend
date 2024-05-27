import { axiosAccess } from "../../api/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { END_POINT } from "../../constants/endPoint";
import { QUERY_KEYS } from "../../constants/queryKeys";
import useToast from "../useToast";
import { useQueryClient } from "@tanstack/react-query";

const fetchAPI = async () => {
  const res = await axiosAccess.post(`${END_POINT.USER.DEACTIVATE}`)
  return res.data
};

const useDeactivateQuery = () => {
  const { toastSuccess } = useToast()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: deactivateMutate } = useMutation({
    mutationKey: [QUERY_KEYS.DEACTIVATE],
    mutationFn: () => fetchAPI(),
    onSuccess: () => {
      localStorage.removeItem("Access-Token");
      localStorage.removeItem("userInfo");
      queryClient.removeQueries({
        queryKey: [QUERY_KEYS.GET_USER_INFO],
        exact: true,
      })
      toastSuccess("회원탈퇴가 완료되었습니다.");
      navigate("/", { replace: true });
    },
  });

  return { deactivateMutate };
};

export default useDeactivateQuery;