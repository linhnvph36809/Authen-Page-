import { useEffect } from "react";
import usePosts from "../../hooks/usePosts";
import FormPost from "./components/Form";
import Heading from "./components/Heading";
import { useParams } from "react-router-dom";
import Loading from "./components/Loading";
import { useTranslation } from "react-i18next";
import { API_POST } from "../../axios/constants";

const UpdatePost = () => {
  const { data, loading, error, fetchPosts } = usePosts();
  const { id } = useParams();
  const { t } = useTranslation();

  console.log(error);

  const onFinish = (value: any) => {
    fetchPosts(API_POST.POST+id, "PUT", value);
  };

  useEffect(() => {
    fetchPosts(API_POST.POST+id, "GET");
  }, []);

  return (
    <>
      <Loading loading={loading} />
      <section>
        <Heading title={t("posts.title_edit")} />
        <div>
          <FormPost onFinish={onFinish} initialValues={data} />
        </div>
      </section>
    </>
  );
};

export default UpdatePost;
