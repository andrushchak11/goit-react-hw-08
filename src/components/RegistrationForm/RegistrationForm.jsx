import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <label>
          Name
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>

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

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
