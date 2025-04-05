import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be at most 50 characters")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format (XXX-XX-XX)")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact({ id: nanoid(), ...values }));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label>Name:</label>
          <Field name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div>
          <label>
            Number:
            <Field name="number" className={css.input} />
          </label>
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
