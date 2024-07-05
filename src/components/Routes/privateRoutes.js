import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth(); //destructure the auth

  useEffect(() => {
    const authCheck = async () => {
      //defining prefix of our private URL
      const res = await axios.get("/api/v1/auth/user-auth", {
        headers: {
          Authorization: auth?.token, //defining header with key<token>
        },
      });
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth.token) authCheck(); //caling hook function
  }, [auth?.token]); //defining depemndency
  return ok ? <Outlet /> : "spinner";
}
