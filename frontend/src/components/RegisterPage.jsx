import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Typography } from "@mui/material";

const registrationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters long"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-grey">
      <div className="p-6 rounded-lg shadow-lg bg-white max-w-md w-full">
        <Typography variant="h4" className="text-center mb-4">
          Register
        </Typography>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={registrationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <Field
                type="text"
                name="username"
                placeholder="Username"
                as={TextField}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-xs italic"
              />

              <Field
                type="email"
                name="email"
                placeholder="Email"
                as={TextField}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs italic"
              />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                as={TextField}
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs italic"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
                className="w-full"
              >
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default RegisterPage;
