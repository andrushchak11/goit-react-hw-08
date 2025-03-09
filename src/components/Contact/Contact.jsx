import css from "./Contact.module.css";

function Contact({ id, name, number, onDelete }) {
  return (
    <li className={css.contact}>
      <div className={css.data}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
