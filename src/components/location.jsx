import { useCallback, useState } from "react";
import { Modal } from "./modal";

export const Location = (props) => {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  const { location } = props || {};

  return (
    <>
      <button onClick={() => openModal()}>{location?.name}</button>
      {open ? <Modal location={location} close={closeModal} /> : null}
    </>
  );
};
