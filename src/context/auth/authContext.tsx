import { createContext } from "react";

const authContext = createContext({
  isLoggedIn: false,
  userData: {},
  loginUser: ({ username = "", password = "" }) => {},
  logoutUser: () => {},
});

export default authContext;
