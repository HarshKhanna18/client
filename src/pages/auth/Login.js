import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../css/login.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //form Submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //Creating post request that can be handeled by LoginController
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      //IF our request handle success
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..!");
    }
  };
  return (
    <Layout title="Sign in">
      <div className="login">
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              id="loginEmail"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              id="loginPassword"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
