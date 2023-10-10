import { Button, Card } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import {
  EyeOutlined,DeleteOutlined
} from "@ant-design/icons";
import { useAppDispatch } from "../redux/hooks";
import { addToWatchingList, removeFromWatchList } from "../redux/slices/watchListSlice";

const { Meta } = Card;

const WatchList = ({ episode }: { episode: Episode | null }) => {

    const dispatch = useAppDispatch()
  return (
    <>
      <Card
        hoverable
        className="cursor-default"
        actions={[
          <Button onClick={()=>dispatch(addToWatchingList(episode as Episode))} className="border-none shadow-none" block>
            <EyeOutlined />
            Watching
          </Button>,

          <Button onClick={()=>dispatch(removeFromWatchList(episode?.id as string))} className="border-none shadow-none" block>
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

export default WatchList;
