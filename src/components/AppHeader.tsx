import { FileAddOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";
const { Header } = Layout;

const AppHeader = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const { watchLists, watchingList, watched } = useAppSelector(
    (state) => state.episodes
  );

  return (
    <Header className="flex sticky top-0 w-full z-50 justify-between">
      <div className="flex items-center justify-center">
        <Link
          className="bg-gray-500 font-bold text-base md:text-xl font-poppins text-white px-2 py-1 rounded-sm"
          to="/"
        >
          RICK & MORTY
        </Link>
      </div>
      <Menu theme="dark" mode="vertical" className="">
        <Button onClick={showDrawer} type="text">
          <Badge count={watchLists.length}>
            <span className="text-white font-medium text-sm font-poppins hover:text-cyan-500">
              WatchList
              <FileAddOutlined className="ml-2 text-lg font-bold" />
            </span>
          </Badge>
        </Button>
        <Drawer
          title="My Watchlist"
          placement="right"
          onClose={onClose}
          open={open}
        >
          <Link to="/watchlist">
            <Button block>WatchList ({watchLists.length})</Button>
          </Link>
          <Link to="/watching-list">
            {" "}
            <Button block className="my-2">
              Watching List ({watchingList.length})
            </Button>
          </Link>
          <Link to="watched-list">
            <Button block>Watched List ({watched.length})</Button>
          </Link>
        </Drawer>
      </Menu>
    </Header>
  );
};
export default AppHeader;
