import { useAppContext } from "../context/appContext";
import { AlertWrapper } from "../styledComponents";

const Alert = () => {
  const { alertType, alertText } = useAppContext();

  return <AlertWrapper alertType={alertType}>{alertText}</AlertWrapper>;
};

export default Alert;
