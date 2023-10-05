import { FileAddOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="flex justify-between">
      <div>
        <a
          className="bg-gray-500 font-bold text-xl font-poppins text-white px-2 py-1 rounded-sm"
          href="/"
        >
          RICK MORTY
        </a>
      </div>
      <Menu theme="dark" mode="vertical" className="">
        <a
          href="/allNews"
          className="text-white font-medium text-sm font-poppins hover:text-blue-500"
        >
          <FileAddOutlined className="mr-2" />
          WishList
        </a>
      </Menu>
    </Header>
  );
};
export default AppHeader;
