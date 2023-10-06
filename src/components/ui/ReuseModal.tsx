import { Modal } from "antd";

const ReuseModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        centered
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        width={1000}
      ><h2 className="text-center text-3xl py-24">Thank You So Much For Watching</h2></Modal>
    </>
  );
};

export default ReuseModal;
