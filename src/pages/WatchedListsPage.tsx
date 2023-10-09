import { Col, Row } from "antd"
import WatchedList from "../components/WatchedList"
import { Episode } from "../graphql/__generated__/graphql"
import { useAppSelector } from "../redux/hooks"

const WatchedListsPage = () => {
    const {watched} = useAppSelector(state=>state.episodes)
  return (
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
  )
}
export default WatchedListsPage