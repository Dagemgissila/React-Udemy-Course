import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef((props, ref) => {
  const dialogRef = useRef();

  // Expose open and close methods via useImperativeHandle
  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal(); // Open the modal
      }
    },
    close: () => {
      if (dialogRef.current) {
        dialogRef.current.close(); // Close the modal
      }
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {props.children}
      <button onClick={() => dialogRef.current?.close()}>Close</button>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
