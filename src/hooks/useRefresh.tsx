import { useContext } from "react";
import { RefreshContext } from "../context/RefreshContext";

const useRefresh = () => {
  const { tick } = useContext(RefreshContext);
  return { tick };
};

export default useRefresh;
