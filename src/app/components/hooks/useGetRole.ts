import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

function useGetRole() {
  const { user } = useSelector((state: RootState) => state.user);
  return typeof user !== "boolean" && user.role.type === "admin";
}

export default useGetRole;
