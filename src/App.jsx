import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const App = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object({
    email: yup.string().required("Email is required").email(),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters long")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .required("Password is required"),
  });

  const handleSubmit = (value) => {
    console.log(value);
  };
  return (
    <div className=" w-[50%] m-10 border rounded-lg p-10">
      <Formik
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={initialValue}
        onSubmit={handleSubmit}
      >
        {({isSubmitting}) => (
          <>
            <Form className="  flex flex-col justify-center gap-4">
              <label htmlFor="email">Email</label>
              <Field
                className=" border-2 rounded-md"
                type="email"
                name="email"
                id="email"
              />
              <ErrorMessage
                name="email"
                component={"p"}
                className=" text-red-500 text-sm"
              />
              <label htmlFor="password">Password</label>
              <Field
                className=" border-2 rounded-md"
                type="password"
                name="password"
                id="password"
              />
              <ErrorMessage
                name="password"
                component={"p"}
                className=" text-red-500 text-sm"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className=" bg-blue-500 px-3 py-2 rounded-lg"
              >
                Submit
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default App;

/*
Formik => initial
Form => html form
Field => input
ErrorMessage => Error Text String
*/

/*
validate => custom
validationSchema => with library
*/
