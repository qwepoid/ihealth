import ApplicationRoutes from "ihealth/constants/ApplicationRoutes";
import authContext from "ihealth/context/auth/authContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Login = () => {
  const { isLoggedIn, loginUser } = useContext(authContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [] = useState();
  /**
   * Authenticates user into the app
   */
  async function handleLogin() {
    console.log("Logging in");
    await loginUserService();
  }

  async function loginUserService() {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const resJson = await res.json();
    loginUser(resJson);
  }

  function handleUsernameUpdate(e) {
    setUsername(e.target.value);
  }
  function handlePasswordUdpate(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (isLoggedIn) {
      router.replace(ApplicationRoutes.Dashboard);
    }
  }, [isLoggedIn]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="h-2/3 flex flex-col justify-around items-center">
        <div>logo</div>
        <div className="flex flex-col justify-around items-center">
          <div className="text-4xl">iHealth</div>
          <div className="c text-[#908F8F]">Health First</div>
        </div>
        <div className="flex flex-col justify-around items-center">
          <input
            placeholder="Enter user name"
            value={username}
            onChange={handleUsernameUpdate}
          />
          <input
            placeholder="password"
            value={password}
            onChange={handlePasswordUdpate}
          />
        </div>
        <button
          className="border w-32 h-14 bg-[#00A651] text-white rounded-xl"
          onClick={handleLogin}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Login;
