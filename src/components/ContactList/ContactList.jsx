import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

function ContactList() {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
