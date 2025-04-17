import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContact } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContact());
    }
  }, [dispatch, isLoggedIn]);

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
