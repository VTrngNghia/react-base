import axios from "../../plugins/axios";

export default {
  logout: () => axios.post("/auth/logout"),
};
