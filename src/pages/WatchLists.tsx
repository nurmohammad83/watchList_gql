
import { Col, Row } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import WatchList from "../components/WatchList";
import { useAppSelector } from "../redux/hooks";

const WatchListsPage = () => {
  const {watchLists} = useAppSelector(state=>state.episodes)

  return (
    <div className="px-6 py-5 sm:px-16">
      <h1 className="font-poppins text-center py-6 sm:py-10">Watch List</h1>
      <Row justify={"center"} align={"middle"} gutter={[16, 16]}>
        {watchLists?.map((episode: Episode | null) => (
      <Col xs={24} sm={24} md={12} lg={12} xl={8}>
        <WatchList key={episode?.id} episode={episode} />
      </Col>
    ))}
      </Row>
    </div>
  );
};
export default WatchListsPage;
