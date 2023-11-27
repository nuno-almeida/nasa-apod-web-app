import { createContext, useState } from "react";

const AuthContext = createContext();

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("login"));

  const login = async ({ user, pass }) => {
    await delay(2000);

    if (
      user === localStorage.getItem("user") &&
      pass === localStorage.getItem("pass")
    ) {
      localStorage.setItem("login", "true");
      setIsAuth(true);

      return {
        ok: true,
        message: "",
      };
    }

    return {
      ok: false,
      message: "Invalid credentials",
    };
  };

  // NOTE this is just a demo example
  const register = async ({ user, pass }) => {
    await delay(2000);
    
    localStorage.setItem("login", "true");
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
  };

  const logout = () => {
    localStorage.removeItem("login");
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
