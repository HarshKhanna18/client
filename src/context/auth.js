import { useState, useContext, createContext } from "react";

//creating context
const AuthContext = createContext();

//creating Auth Provider
const AuthProvider = ({ childern }) => {
  //creating state
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {childern}
    </AuthContext.Provider>
  );
};

//creating custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
