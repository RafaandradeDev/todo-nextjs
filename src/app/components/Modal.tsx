interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => boolean | void;
}

const Modal: React.FC<ModalProps> = ({ open, setOpen }) => {
  return (
    <dialog
      id="my_modal_5"
      className={`modal ${
        open ? "modal-open modal-bottom sm:modal-middle" : ""
      }`}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn" onClick={() => setOpen(false)}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
