import authContext from "ihealth/context/auth/authContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import {} from "../../../public/assets/images/account.png";

const Footer = () => {
  const defaultFooter = (
    <div className="fixed bottom-0 h-14 flex w-screen justify-around bg-white">
      <img src="/../../../assets/images/home.png" height={10} />
      <img src="../../../assets/images/cart.png" height={10} />
      <img src="../../../assets/images/chat.png" height={10} />
      <img src="../../../assets/images/account.png" height={10} />
    </div>
  );
  const [footer, setFooter] = useState(defaultFooter);
  const { isLoggedIn } = useContext(authContext);
  useEffect(() => {
    setFooter(isLoggedIn ? defaultFooter : <></>);
  }, [isLoggedIn]);
  return footer;
};

export default Footer;
