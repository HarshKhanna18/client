import { useState, useEffect, useContext, createContext } from "react";

//creating context
const AuthContext = createContext();

//creating Auth Provider
const AuthProvider = ({ children }) => {
  //creating state
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  useEffect(() => {
    //Frtching the data from local storage
    const data = localStorage.getItem("auth");
    if (data) {
      //checking if data is not null then we can simply parse it and set into in useAuth function
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
      });
    }
    //eslint-disable-next-line
  }, []); //Removing auth dependency because we dont require in continous

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//creating custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
