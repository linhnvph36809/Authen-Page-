import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import AddPost from "../pages/Posts/AddPost";
import MainLayout from "../components/Layouts/MainLayout";
import ListPost from "../pages/Posts";
import PrivateRouter from "../components/PrivateRouter";
import UpdatePost from "../pages/Posts/UpdatePost";
import AppLayout from "../components/Layouts/AppLayout";
import { PATH_POST } from "./path";
import GuestLayout from "../components/Layouts/GuestLayout";

const Routes = () => {
  let element = useRoutes([
    {
      path: "",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <GuestLayout />,
          children: [
            {
              path: "login",
              element: <Login />,
            },
          ],
        },
        {
          path: PATH_POST.POST,
          element: (
            <PrivateRouter>
              <MainLayout />
            </PrivateRouter>
          ),
          children: [
            {
              path: "",
              element: <ListPost />,
            },
            {
              path: "add",
              element: <AddPost />,
            },
            {
              path: "edit/:id",
              element: <UpdatePost />,
            },
          ],
        },
      ],
    },
  ]);

  return element;
};

export default Routes;
