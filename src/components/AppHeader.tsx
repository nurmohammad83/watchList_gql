import { FileAddOutlined } from "@ant-design/icons";
import { Badge, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
const { Header } = Layout;

const AppHeader = () => {

  const {watchLists} = useAppSelector(state=>state.episodes)
  

  return (
    <Header className="flex sticky top-0 w-full z-50 justify-between">
      <div className="flex items-center justify-center">
        <Link
          className="bg-gray-500 font-bold text-xl font-poppins text-white px-2 py-1 rounded-sm"
          to="/"
        >
          RICK & MORTY
        </Link>
      </div>
      <Menu theme="dark" mode="vertical" className="">
        <Link
          to="/watch-list"
          className=""
        >
           <Badge count={watchLists.length}>
           <span className="text-white font-medium text-sm font-poppins hover:text-cyan-500">
            WatchList
           <FileAddOutlined className="ml-2 text-lg font-bold" />
           </span>
         </Badge>
          
        </Link>
      </Menu>
    </Header>
  );
};
export default AppHeader;
