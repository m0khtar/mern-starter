import { useLocation } from "react-router-dom";

const ServerError = () => {
  const { state } = useLocation();
  const { message, details } = state;
  return <h1>server error</h1>;
};

export default ServerError;
