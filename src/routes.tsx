import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import AddPost from "./pages/Posts/AddPost";
import LayoutPost from "./components/Layouts/LayoutPost";
import ListPost from "./pages/Posts";
import PrivateRouter from "./components/PrivateRouter";
import UpdatePost from "./pages/Posts/UpdatePost";

const Routes = () => {
  let element = useRoutes([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "posts",
      element: (
        <PrivateRouter>
          <LayoutPost />
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
  ]);

  return element;
};

export default Routes;
