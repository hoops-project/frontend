import { axiosAuth, defaultAxios } from "../../api/axiosInstance";
import { SignInType, SignInResponseType } from "../../types/auth";
import { useUserStore } from "../../store/store";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "../../constants/queryKeys";
import { END_POINT } from "../../constants/endPoint";


const memberLogin = async (data: SignInType): Promise<SignInResponseType> => {
  const { id, password, rememberMe } = data;

  const res = await defaultAxios.post(`${END_POINT.AUTH.LOGIN}`, { id, password, rememberMe }
    
  );

  return res.data;
};


export default function useLoginQuery() {
  const navigate = useNavigate();
  const updateUser = useUserStore((state) => state.updateUser);

  const {
    data: loginData,
    mutate: loginMutate,
    isPending: loginPending,
    isError: loginError,
  } = useMutation<SignInResponseType, unknown, SignInType>({
    mutationKey: [QUERY_KEYS.LOGIN],
    mutationFn: memberLogin,
    onSuccess: async (data, variables) => {
      const accessToken = data.headers["access-token"];

      if (variables.rememberMe) {
        localStorage.setItem("Access-Token", accessToken);
      } else {
        sessionStorage.setItem("Access-Token", accessToken);
      }

      const userInfo = await defaultAxios
        .get(END_POINT.USER.USER_INFO)
        .then((res) => res.data);

      updateUser({
        ...userInfo,
        isLogin: true,
      });
      navigate('/', { replace: true });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { loginData, loginMutate, loginPending, loginError };
}
