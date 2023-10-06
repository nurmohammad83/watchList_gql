
import { Col, Divider, Row } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import WatchList from "../components/WatchList";
import { useAppSelector } from "../redux/hooks";
import WatchingList from "../components/WatchingList";
import WatchedList from "../components/WatchedList";

const WatchListsPage = () => {
  const {watchLists,watchingList,watched} = useAppSelector(state=>state.episodes)

  return (
    <div className="px-6 py-5 sm:px-16 font-poppins">
      <h1 className="font-poppins text-center py-6 sm:py-10">Watch List</h1>
     <div className="flex gap-5">
     <div className="w-1/2">
     <h2 className="text-center text-lg py-4">Total Watch List</h2>
     <Row  justify={"center"} align={"middle"} gutter={[16, 16]}>
    
        {watchLists?.map((episode: Episode | null) => (
      <Col xs={24} sm={24} md={16} lg={12} xl={12}>
        <WatchList key={episode?.id} episode={episode} />
      </Col>
    ))}
      </Row>
     </div>

     <div className="w-1/2">
     <h2 className="text-center text-lg py-4">Total Watching List</h2>
     <Row  justify={"center"} align={"middle"} gutter={[16, 16]}>
      
        {watchingList?.map((episode: Episode | null) => (
      <Col xs={24} sm={24} md={16} lg={12} xl={12}>
        <WatchingList key={episode?.id} episode={episode} />
      </Col>
    ))}
      </Row>
     </div>
     </div>
     <Divider />
     <div className="py-8">
     <h2 className="text-center text-lg py-4">Total Watched List</h2>
     <Row  justify={"center"} align={"middle"} gutter={[16, 16]}>
      
        {watched?.map((episode: Episode | null) => (
      <Col xs={24} sm={24} md={16} lg={12} xl={8}>
        <WatchedList key={episode?.id} episode={episode} />
      </Col>
    ))}
      </Row>
     </div>
    </div>
  );
};
export default WatchListsPage;
