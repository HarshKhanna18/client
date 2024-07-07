import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = () => {
  const [count, setCount] = useState(5); //create one count state with 5 default value
  const navigate = useNavigate(); //create navigate variable
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((previousValue) => --previousValue); //decresing the count of time
    }, 1000);
    count === 0 &&
      navigate("/login", {
        state: location.pathname, //fetching current path
      }); //redirecting to login page once time become 0
    return () => clearInterval(interval); //
  }, [count, navigate, location]); //adding dependencies
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-center">Redirecting in {count} second</h1>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
