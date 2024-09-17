import { useCallback, useEffect, useState } from "react";
import { axiosInstant } from "../axios/instance";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";
import { handlerSetLocal, handlerDeleteLocal, handlerGetLocal } from "../local";
import { API_LOGIN } from "../axios/constants";
import { PATH_POST } from "../routes/path";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const onLogin = useCallback(async (username: { username: string }) => {
    const { data } = await axiosInstant.post(API_LOGIN, username);
    if (data?.accessToken) {
      handlerSetLocal("accessToken", data?.accessToken);
      handlerSetLocal("refreshToken", data?.refreshToken);
      handlerSetLocal("username", username.username);
      setIsLogin(true);
      navigate(PATH_POST.POST);
    }
  }, []);

  const onLogout = useCallback(() => {
    handlerDeleteLocal("accessToken");
    handlerDeleteLocal("refreshToken");
    handlerDeleteLocal("username");

    setIsLogin(false);
    navigate("/");
  }, []);

  const {
    data,
    error,
    loading,
    run: handlerLogin,
  } = useRequest(onLogin, {
    manual: true,
  });

  useEffect(() => {
    setIsLogin(!!handlerGetLocal("accessToken"));
  }, []);

  return {
    isLogin,
    setIsLogin,
    data,
    error,
    loading,
    handlerLogin,
    onLogout,
  };
};

export default useAuth;
