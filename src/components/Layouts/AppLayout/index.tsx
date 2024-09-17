import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

const AppLayout = () => {

    const { i18n } = useTranslation();

    const changeLanguage = (lng:string) => {
      i18n.changeLanguage(lng);
    };

  return (
    <div>
      <div className="flex gap-x-2">
        <button className="text-sm" onClick={() => changeLanguage("en")}>
          English
        </button>
        <button className="text-sm" onClick={() => changeLanguage("vi")}>
          Tiếng Việt
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
