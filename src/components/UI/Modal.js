import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, title, message, actions }) {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog}>
      <h2>{title}</h2>
      <p>{message}</p>
      <div>{actions}</div>
    </dialog>,
    document.getElementById("modal")
  );
}