import { Col, Result, Row } from "antd";
import WatchedList from "../components/WatchedList";
import { Episode } from "../graphql/__generated__/graphql";
import { useAppSelector } from "../redux/hooks";

const WatchedListsPage = () => {
  const { watched } = useAppSelector((state) => state.episodes);

  let content = null;
  if ( watched?.length === 0 || watched?.length < 0)
    content = <div className="flex justify-center w-screen"> <Result status="info" title="No watched list found!" /></div>;

  if (watched?.length && watched?.length > 0) {
    content = watched?.map((episode: Episode | null) => (
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <WatchedList key={episode?.id} episode={episode} />
        </Col>
      ))
  }
  return (
    <div className="px-6 py-5 sm:px-16 font-poppins">
      <h1 className="font-poppins py-6 sm:py-10 text-center">Watched List</h1>
      <div>
        <Row justify={"center"} align={"middle"} gutter={[16, 16]}>
          {content}
        </Row>
      </div>
    </div>
  );
};
export default WatchedListsPage;
