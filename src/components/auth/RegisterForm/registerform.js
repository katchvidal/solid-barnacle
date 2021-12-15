import React from "react";
import { useFormik } from "formik";
import { Button, Form, Icon } from "semantic-ui-react";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../graphql/user";
import { toast } from "react-toastify";

export default function Registerform({ ShowLogin, setShowLogin }) {
  const [register] = useMutation(REGISTER);
  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(validateSchema()),
    onSubmit: async (values) => {
      const { name, username, email, password } = values;
      try {
        const { data } = await register({
          variables: {
            input: {
              name,
              username,
              email,
              password,
            },
          },
        });
        toast.success(`User Create Succesfull ${data.register.name} `, {
          theme: "dark",
          icon: "🚀",
        });
        setShowLogin(!ShowLogin);
      } catch (error) {
        toast.error(`Something going wrong, try again ${error.message}`, {
          theme: "dark",
          icon: "❌",
        });
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="justify-center items-center bg-white">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Input
            type="text"
            iconPosition="left"
            icon="users"
            placeholder="Nombre y Apellidos"
            name="name"
            value={formik.values.name}
            error={formik.errors.name && true}
            onChange={formik.handleChange}
          />
          <Form.Input
            iconPosition="left"
            icon="user secret"
            type="text"
            placeholder="Username"
            name="username"
            value={formik.values.username}
            error={formik.errors.username && true}
            onChange={formik.handleChange}
          />
          <Form.Input
            iconPosition="left"
            type="text"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            error={formik.errors.email && true}
            onChange={formik.handleChange}
            icon="mail"
          />
          <Form.Input
            type="password"
            iconPosition="left"
            icon="paste"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            error={formik.errors.password}
            onChange={formik.handleChange}
          />
          <Form.Input
            type="password"
            iconPosition="left"
            icon="paste"
            placeholder="Repeat Password"
            name="password2"
            value={formik.values.password2}
            error={formik.errors.password2}
            onChange={formik.handleChange}
          />
          <Button
            color="instagram"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            <Icon name="instagram" /> Registrar Instagram
          </Button>
        </Form>
        <p
          className="text-2xl hover:text-blue-500 cursor-pointer justify-center items-center text-center"
          onClick={() => setShowLogin(!ShowLogin)}
        >
          Sign in
        </p>
      </div>
    </>
  );
}

function initialValue() {
  return {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: "",
  };
}

function validateSchema() {
  return {
    name: Yup.string().required(true),
    username: Yup.string(true)
      .required(true)
      .matches(/^[a-zA-Z0-9-]*$/, true),
    email: Yup.string().required(true).email(true),
    password: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password2"), null], "Passwords must match"),
    password2: Yup.string()
      .required(true)
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  };
}
