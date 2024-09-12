import { Table } from "antd";
import { columns } from "./column";
import Heading from "./components/Heading";
import usePosts from "../../hooks/usePosts";
import { useEffect } from "react";
import Loading from "./components/Loading";
import { useTranslation } from "react-i18next";

const ListPost = () => {
  const { data, loading, error, fetchPosts } = usePosts();
  const { t } = useTranslation();

  console.log(error);

  useEffect(() => {
    fetchPosts("posts", "GET");
  }, []);

  return (
    <>
      <section>
        <Heading title={t('posts.title_list')} />
        <div>
          <Table columns={columns} dataSource={data?.posts} />
        </div>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default ListPost;
