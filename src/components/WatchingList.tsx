import { Button, Card } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import {
    DeleteOutlined,
  CheckOutlined
} from "@ant-design/icons";
import { useAppDispatch } from "../redux/hooks";
import { finishedWatch, removeFromWatchingList } from "../redux/slices/watchListSlice";

const { Meta } = Card;

const WatchingList = ({ episode }: { episode: Episode | null }) => {

    const dispatch = useAppDispatch()
  return (
    <>
      <Card
        hoverable
        className="cursor-default"
        actions={[
          
          <Button onClick={()=>dispatch(finishedWatch(episode as Episode))} className="border-none shadow-none" block>
            <CheckOutlined /> 
            Watched
          </Button>,
          <Button onClick={()=>dispatch(removeFromWatchingList(episode?.id as string))} className="border-none shadow-none" block>
          <DeleteOutlined />
          Remove
        </Button>,
        ]}
      >
        <Meta
          className="font-semibold  text-center"
          title={episode?.name}
          description={`Ep: ${episode?.episode}`}
        />
      </Card>
    </>
  );
};

export default WatchingList;
