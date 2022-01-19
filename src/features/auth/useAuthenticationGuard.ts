import { useSelector } from "react-redux";
import { selectAccessToken } from "./selectors";
import { useNavigate } from "react-router-dom";

export default function useAuthenticationGuard() {
  const accessToken = useSelector(selectAccessToken);
  const navigate = useNavigate();
  if (!accessToken) {
    navigate("/auth/login");
  }
  return accessToken;
}
