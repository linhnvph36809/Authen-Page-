import { useCallback, useEffect, useState } from "react";
import { axiosInstant } from "../axios/instance";
import { useRequest } from "ahooks";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const onLogin = useCallback(async (username: {username:string}) => {
    const { data } = await axiosInstant.post(`/auth/login`, username);
    if (data?.accessToken) {
      localStorage.setItem("accessToken", data?.accessToken);
      localStorage.setItem("refreshToken", data?.refreshToken);
      localStorage.setItem("username", username.username);
      setIsLogin(true);
      navigate("/posts");
    }
  }, []);

  const onLogout = useCallback(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");

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
    setIsLogin(!!localStorage.getItem("accessToken"));
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
