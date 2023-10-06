import { Button, Card } from "antd";
import { Episode } from "../graphql/__generated__/graphql";
import {
  SettingOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import { useAppDispatch } from "../redux/hooks";
import { removeFromWatchedList } from "../redux/slices/watchListSlice";
import { useState } from "react";
import ReuseModal from "./ui/ReuseModal";

const { Meta } = Card;

const WatchedList = ({ episode }: { episode: Episode | null }) => {

    const [open,setOpen] = useState(false)
   
    const showModal = () => {
        setOpen(true);
      };
    const dispatch = useAppDispatch()
  return (
    <>
    <ReuseModal open={open} setOpen={setOpen}/>
      <Card
        hoverable
        className="cursor-default"
        actions={[
            <Button  onClick={showModal} className="border-none shadow-none" block>
              <SettingOutlined key="setting" />
              Done
            </Button>,
  
            <Button onClick={()=>dispatch(removeFromWatchedList(episode?.id as string))} className="border-none shadow-none" block>
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

export default WatchedList;
