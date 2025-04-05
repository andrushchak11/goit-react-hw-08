import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import css from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li className={css.contact}>
      <div className={css.data}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
