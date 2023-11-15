import { createContext, useState } from "react";
import { storageSave } from "../utils/secureStorage";

export const AuthContext = createContext({
  token: null,
  isAuthenticated: false,
  // eslint-disable-next-line no-unused-vars
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
    storageSave("token", token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
