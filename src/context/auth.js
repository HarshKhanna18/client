import { useState, useContext, createContext } from "react";

//creating context
const AuthContext = createContext();

//creating Auth Provider
const AuthProvider = ({ children }) => {
  //creating state
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

//creating custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
