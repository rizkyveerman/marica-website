import { useState, useEffect, useContext } from "react";
import { ModalContext } from "@/libs/context/modal-context";
import { createPortal } from "react-dom";
import Button from "../Button";

const LoginModal = ({ onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  console.log(modalCtx.isShow ? "modall" : "gaada");

  const modalContent = modalCtx.isShow && (
    <div className="overlay">
      <div className="modal p-4">
        <Button isClicked={handleCloseClick} type="secondary">
          Close
        </Button>
        <div>{children}</div>
      </div>
    </div>
  );

  if (isBrowser) {
    return createPortal(
      <div>{modalContent}</div>,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default LoginModal;
