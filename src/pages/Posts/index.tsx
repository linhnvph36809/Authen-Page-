import { Table } from "antd";
import { columns } from "./column";
import Heading from "./components/Heading";
import usePosts from "../../hooks/usePosts";
import { useEffect } from "react";
import Loading from "./components/Loading";

const ListPost = () => {
  const { data, loading, error, fetchPosts } = usePosts();
  console.log(error);

  useEffect(() => {
    fetchPosts("posts", "GET");
  }, []);

  return (
    <>
      <section>
        <Heading title="List Post" />
        <div>
          <Table columns={columns} dataSource={data?.posts} />
        </div>
      </section>
      <Loading loading={loading} />
    </>
  );
};

export default ListPost;
