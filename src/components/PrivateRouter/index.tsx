import { ReactNode } from "react";
import useAuth from "../../hooks/useAuth";

const PrivateRouter = ({ children }: { children: ReactNode }) => {
  const { isLogin } = useAuth();

  return isLogin ? children : <h1>Not found</h1>;
};

export default PrivateRouter;
