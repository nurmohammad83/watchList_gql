import { Col, Result, Row } from "antd";
import WatchingList from "../components/WatchingList";
import { Episode } from "../graphql/__generated__/graphql";
import { useAppSelector } from "../redux/hooks";

const WatchingPage = () => {
  const { watchingList } = useAppSelector((state) => state.episodes);

  let content = null;
  if (watchingList?.length === 0 || watchingList?.length < 0)
    content = <div className="flex justify-center w-screen"> <Result status="info" title="No watching list found!" /></div>;

  if (watchingList?.length && watchingList?.length > 0) {
    content = watchingList?.map((episode: Episode | null) => (
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <WatchingList key={episode?.id} episode={episode} />
      </Col>
    ));
  }
  return (
    <div className="px-6 py-5 sm:px-16 font-poppins">
      <h1 className="font-poppins py-6 sm:py-10 text-center">Watching List</h1>
      <div>
        <Row justify={"center"} align={"middle"} gutter={[16, 16]}>
          {content}
        </Row>
      </div>
    </div>
  );
};
export default WatchingPage;
