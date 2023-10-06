import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card } from "antd";
import { Episode } from "../graphql/__generated__/graphql";

const { Meta } = Card;

const EpisodeDetails = ({ episode }: { episode: Episode | null }) => {
  return (
    <Card
      cover={
        <img
          className="h-full w-full"
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        className="text-center"
        title={episode?.name}
        description={episode?.episode}
      />
    </Card>
  );
};

export default EpisodeDetails;
