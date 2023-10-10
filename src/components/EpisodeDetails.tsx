import { FileAddOutlined, CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addToWatchList,
  removeFromWatchList,
} from "../redux/slices/watchListSlice";

const { Meta } = Card;

const EpisodeDetails = ({ episode }: { episode: Episode | null }) => {
  const { watchLists, watched } = useAppSelector((state) => state.episodes);

  const filterItem = watchLists.find((item) => item.id === episode?.id);

  const watchedItem = watched.find((item) => item.id === episode?.id);

  const dispatch = useAppDispatch();
  const handelAdded = (data: Episode) => {
    dispatch(addToWatchList(data));
  };

  return (
    <Card hoverable className="cursor-default">
      <Meta
        className="font-semibold  text-center"
        title={episode?.name}
        description={`Ep: ${episode?.episode}`}
      />
      {/* Button */}
      <div className="mt-5 flex flex-wrap gap-2">
        {watchedItem ? (
          <Button
            onClick={() => dispatch(removeFromWatchList(episode?.id as string))}
            className="font-poppins border-green-400 text-green-500"
            size="middle"
            type="default"
            block
          >
            <CheckOutlined />
            In Watched
          </Button>
        ) : (
          <>
            {!filterItem ? (
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
            ) : (
              <Button
                onClick={() =>
                  dispatch(removeFromWatchList(episode?.id as string))
                }
                className="font-poppins border-red-400 text-red-500"
                size="middle"
                type="default"
                block
              >
                <DeleteOutlined />
                Remove From Watchlist
              </Button>
            )}
          </>
        )}
      </div>
    </Card>
  );
};

export default EpisodeDetails;
