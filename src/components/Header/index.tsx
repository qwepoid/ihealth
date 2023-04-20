import authContext from "ihealth/context/auth/authContext";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const defaultHeader = <div className="fixed top-0 h-8">Header</div>;
  const [header, setHeader] = useState(defaultHeader);
  const { isLoggedIn } = useContext(authContext);
  useEffect(() => {
    setHeader(isLoggedIn ? defaultHeader : <></>);
  }, [isLoggedIn]);
  return header;
};

export default Header;
