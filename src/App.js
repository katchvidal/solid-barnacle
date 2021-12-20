import React, { useEffect, useMemo, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { getToken, decodeToken } from "./utils/token";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./context/AuthContext";
import client from "./apollo/apollo";
import Auth from "./pages/auth/auth";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "./routes/Navigation";

function App() {
  //  State of App ( Auth / Not Auth )
  const [auth, setauth] = useState(undefined);

  //  Check if the user is alredy authenticated
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setauth(null);
    } else {
      setauth(decodeToken(token));
    }
  }, []);

  //  Logout of App
  const logout = () => {
    console.log("Close Session");
  };

  //  Recived user information loggin with JSON WEB TOKEN
  const setUser = (usuario) => {
    setauth(usuario);
  };

  //  Context
  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;
  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={authData}>
        {!auth ? <Auth /> : <Navigation />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        ></ToastContainer>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
