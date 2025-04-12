import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label>
          Email
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className={css.error} />
        </label>

        <label>
          Password
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className={css.error} />
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
