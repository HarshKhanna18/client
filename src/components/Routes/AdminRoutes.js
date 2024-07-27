import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./../Spinner";

export default function AdminRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth(); //destructure the auth

  useEffect(() => {
    const authCheck = async () => {
      //defining prefix of our private URL
      let resAdmin, resUser;
      debugger;
      if (auth.user.role !== 0) {
        resAdmin = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/admin-auth`
        );
      } else {
        resUser = await axios.get(
          `${process.env.REACT_APP_API}/api/v1/auth/user-auth`
        );
      }
      if (resAdmin !== undefined && resAdmin.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck(); //caling hook function
  }, [auth?.token]); //defining dependency
  return ok ? <Outlet /> : <Spinner path="user" />;
}
