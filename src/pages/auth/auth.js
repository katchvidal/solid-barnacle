import React, { useState } from "react";
import { Image } from "semantic-ui-react";
import banner from "../../assets/react&graphql.jpg";
import Loginform from "../../components/auth/LoginForm/loginform";
import Registerform from "../../components/auth/RegisterForm/registerform";
import "./auth.scss";

export default function Auth() {
  const [ShowLogin, setShowLogin] = useState(false);
  return (
    <div className="h-screen flex">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
        <Image src={banner} />
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white">
        {!ShowLogin ? (
          <>
            <Loginform setShowLogin={setShowLogin} ShowLogin={ShowLogin} />
          </>
        ) : (
          <>
            <Registerform setShowLogin={setShowLogin} ShowLogin={ShowLogin} />
          </>
        )}
      </div>
    </div>
  );
}
