import { FileAddOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import { useAppDispatch } from "../redux/hooks";
import { addToWatchList } from "../redux/slices/watchListSlice";

const { Meta } = Card;

const WatchList = ({ episode }: { episode: Episode | null }) => {
  const dispatch = useAppDispatch();

  const handelAdded = (data: Episode) => {
    dispatch(addToWatchList(data));
  };

  return (
    <>
      <Card hoverable className="cursor-default">
        <Meta
          className="font-semibold  text-center"
          title={episode?.name}
          description={`Ep: ${episode?.episode}`}
        />
        {/* Button */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            onClick={() => handelAdded(episode!)}
            className="font-poppins"
            size="middle"
            type="default"
            block
          >
            <FileAddOutlined />
            Add To WatchList
          </Button>
        </div>
      </Card>
    </>
  );
};

export default WatchList;
