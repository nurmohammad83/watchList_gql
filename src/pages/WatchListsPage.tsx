import { Col, Result, Row } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import WatchList from "../components/WatchList";
import { useAppSelector } from "../redux/hooks";

const WatchListsPage = () => {
  const { watchLists } = useAppSelector((state) => state.episodes);

  let content = null;
  if (watchLists?.length === 0 || watchLists?.length < 0)
    content =<div className="flex justify-center w-screen"> <Result status="info" title="No watch list found!" /></div>;

  if (watchLists?.length && watchLists?.length > 0) {
    content = watchLists?.map((episode: Episode | null) => (
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <WatchList key={episode?.id} episode={episode} />
      </Col>
    ));
  }
  return (
    <div className="px-6 py-5 sm:px-16 font-poppins">
      <h1 className="font-poppins py-6 sm:py-10 text-center">Watch List</h1>
      <div>
        <Row justify={"center"} align={"middle"} gutter={[16, 16]}>
          {content}
        </Row>
      </div>
    </div>
  );
};
export default WatchListsPage;
