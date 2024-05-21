import { axiosAccess, defaultAxios } from "../../api/axiosInstance";
import { SignInType, SignInResponseType } from "../../types/auth";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { END_POINT } from "../../constants/endPoint";
import{ useToast } from "../useToast";
// import { useUserStore } from "../../store/store";

const memberLogin = async (data: SignInType): Promise<SignInResponseType> => {
  const { id, password } = data;

  const res = await defaultAxios.post(`${END_POINT.AUTH.LOGIN}`, { id, password });

  // 응답 헤더에서 Authorization 토큰을 추출
  const authorizationHeader = res.headers['authorization'];

  const accessToken = authorizationHeader;


  return {
    accessToken,
    headers: { authorization: authorizationHeader },
    userInfo: res.data
  };
};



export default function useLoginQuery() {
  const navigate = useNavigate();
  const { toastSuccess } = useToast();
  // const updateUser = useUserStore((state) => state.updateUser);

  const {
    data: loginData,
    mutate: loginMutate,
    isPending: loginPending,
    isError: loginError,
  } = useMutation<SignInResponseType, unknown, SignInType>({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: memberLogin,
    onSuccess: async (data, variables) => {

      const accessToken = data.accessToken;

      if (variables.rememberMe) {
        localStorage.setItem("Access-Token", accessToken);
      } else {
        sessionStorage.setItem("Access-Token", accessToken);
      }
      // TODO: 현재 사용자 상태 업데이트하기..
      // const userInfo = await axiosAccess
      //   .get(END_POINT.USER.USER_INFO)
      //   .then((res) => res.data);

      // updateUser({
      //   ...userInfo,
      //   isLogin: true,
      // });
      navigate('/', { replace: true });
      toastSuccess('로그인에 성공하셨습니다!')
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { loginData, loginMutate, loginPending, loginError };
}
