import { createContext, useEffect, useState } from "react";
import axios from "axios";

// here i'm creating the context and i'm setting the default values for the context
export const AuthContext =
  createContext(/* {
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
} */);

export const AuthContextProvider = ({ children }) => {
  // here i'm getting the user from the local storage and i'm setting it to the currentUser state
  // if it's null it means that the user is not logged in
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("/login", inputs, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await axios.post("/logout", inputs);
    setCurrentUser(null);
  };

  // here i'm returning the context provider with the values that i want to share with the components
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser)); //transform object to string
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {/* // here i'm setting the values that i want to share with the components */}
      {/* value={{ isLoggedIn: !!currentUser, userId: currentUser?.id, token: currentUser?.token, login, logout }}>  */}
      {children}
      {/* // here i'm passing the children components that are wrapped by the context provider */}
    </AuthContext.Provider>
  );
};
