import React from "react";
import { useFormik } from "formik";
import { Button, Form, Icon } from "semantic-ui-react";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../graphql/user";
import { toast } from "react-toastify";
import { decodeToken, setToken } from "../../../utils/token";
import useAuth from "../../../hooks/useAuth";

export default function Loginform({ ShowLogin, setShowLogin }) {
  const [login] = useMutation(LOGIN);

  const { setUser } = useAuth();
  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(validateSchema()),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const { data } = await login({
          variables: {
            input: {
              email,
              password,
            },
          },
        });
        toast.success(`Bievenido / Welkome / Welcome`, {
          theme: "dark",
          icon: "🔓",
        });
        const { token } = data.login;
        setUser(decodeToken(token));
        setToken(token);
      } catch (error) {
        toast.error(`Something going wrong, try again: ${error.message}`, {
          theme: "dark",
          icon: "🔐",
        });
      }
    },
  });
  return (
    <div className="justify-center items-center bg-white">
      <h1 className="text-gray-800 font-bold text-2xl mb-1 justify-center items-center">
        Hello Again!
      </h1>
      <p className="text-sm font-normal justify-center items-center text-gray-600 mb-7">
        Welcome Back
      </p>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          type="text"
          iconPosition="left"
          icon="mail"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          error={formik.errors.email && true}
          onChange={formik.handleChange}
        />
        <Form.Input
          type="password"
          iconPosition="left"
          icon="paste"
          placeholder="password"
          name="password"
          value={formik.values.password}
          error={formik.errors.password && true}
          onChange={formik.handleChange}
        />
        <Button
          color="instagram"
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
        >
          <Icon name="instagram" /> Acceder a Instagram
        </Button>
      </Form>
      ¿No Account Yet?
      <span
        className="text-sm ml-2 hover:text-blue-500 cursor-pointer"
        onClick={() => setShowLogin(!ShowLogin)}
      >
        Sign up
      </span>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
        Forgot Password ?
      </span>
    </div>
  );
}

function initialValue() {
  return {
    email: "",
    password: "",
  };
}

function validateSchema() {
  return {
    email: Yup.string().required(true).email(true),
    password: Yup.string().required(true),
  };
}
