import { Space, Spin } from "antd";
const Loading = () => {
  return (
   
     <Space className="mt-32 flex items-center justify-center" size="middle">
      <Spin size="large" />
    </Space>
   
  );
};
export default Loading;
