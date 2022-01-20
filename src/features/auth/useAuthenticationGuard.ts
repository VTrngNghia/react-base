import { useSelector } from "react-redux";
import { selectAccessToken } from "./selectors";
import { useHistory } from "react-router-dom";

export default function useAuthenticationGuard() {
  const accessToken = useSelector(selectAccessToken);
  const history = useHistory();
  if (!accessToken) {
    history.push("/auth/login");
  }
  return !!accessToken;
}
