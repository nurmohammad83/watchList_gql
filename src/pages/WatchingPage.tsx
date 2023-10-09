import { Col, Row } from "antd"
import WatchingList from "../components/WatchingList"
import { Episode } from "../graphql/__generated__/graphql"
import { useAppSelector } from "../redux/hooks"

const WatchingPage = () => {
    const {watchingList} = useAppSelector(state=>state.episodes)
  return (
    <div >
    <h2 className="text-center text-lg py-4">Total Watching List</h2>
    <Row  justify={"center"} align={"middle"} gutter={[16, 16]}>
     
       {watchingList?.map((episode: Episode | null) => (
     <Col xs={24} sm={24} md={16} lg={12} xl={12}>
       <WatchingList key={episode?.id} episode={episode} />
     </Col>
   ))}
     </Row>
    </div>
  )
}
export default WatchingPage