import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(UserContext);
  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    localStorage.setItem("auth-token", "");

    setUserData({
      token: undefined,
      user: undefined,
    });
    history.push("/home");
  };
  return (
    <div>
      {userData.user ? (
        <button className="btn btn-primary" onClick={logout}>
          Log out
        </button>
      ) : (
        <>
          <button className="btn btn-primary" onClick={register}>
            Register
          </button>
          <button class="btn btn-primary" onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
}
