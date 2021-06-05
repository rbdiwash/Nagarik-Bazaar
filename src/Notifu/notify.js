import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function showSuccess(msg) {
  toast.success(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    closeOnClick: true,
  });
}

function showInfo(msg) {
  toast.info(msg, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    closeOnClick: true,
  });
}

function showWarning(msg) {
  toast.warning(msg, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    closeOnClick: true,
  });
}

function handleError(error) {
  toast.error(error, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 2000,
    closeOnClick: true,
  });
}

function customModal(message) {
  return (
    <>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        This is message{message}
        {console.log(message)}
      </div>
    </>
  );
}

const notify = {
  showSuccess,
  showInfo,
  showWarning,
  handleError,
  customModal,
};
// export type ToastPosition ='bottom-center'

export default notify;
