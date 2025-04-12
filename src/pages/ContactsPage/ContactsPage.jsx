import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  return (
    <div className={css.container}>
      <h2>Мої контакти</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default ContactsPage;
