import { useEffect, useReducer, useState } from "react";
import authContext from "./authContext";
import reducer from "./reducer";
import { Action } from "./types";

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { isLoggedIn: false });

  const [productsList, setProductsList] = useState([]);
  // useEffect(() => {

  // }, []);

  const loginUser = (creds) => {
    dispatch({
      type: Action.Login,
      payload: {
        username: creds.username,
        password: creds.password,
      },
    });
  };

  const logoutUser = () => {
    dispatch({
      type: Action.Login,
      payload: {},
    });
  };

  const value = {
    ...state,
    loginUser,
    logoutUser,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
