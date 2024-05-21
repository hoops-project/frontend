import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useToast = () => {
  const toastSuccess = (msg: string | undefined) => {
    toast.success(msg);
  };
  const toastError = (msg: string) => {
    toast.error(msg);
  };
  const toastInfo = (msg: string) => {
    toast.info(msg);
  };
  const toastWarning = (msg: string) => {
    toast.warning(msg);
  };

  return { toastSuccess, toastError, toastInfo, toastWarning };
};

export default useToast;