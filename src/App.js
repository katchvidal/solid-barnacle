import React, { useEffect, useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { getToken } from "./utils/token";
import { ToastContainer } from "react-toastify";
import client from "./apollo/apollo";
import Auth from "./pages/auth/auth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [auth, setauth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setauth(null);
    } else {
      setauth(token);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      {!auth ? <Auth /> : <h1>Your Loggin </h1>}
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
    </ApolloProvider>
  );
}

export default App;
