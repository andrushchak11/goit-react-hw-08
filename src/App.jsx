import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
const LOCAL_STORAGE_KEY = "contacts";
import { fetchContact } from "./redux/operations";
import { selectLoading, selectError } from "./redux/contactsSlice";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div>
      <h1>Книга контактів</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Завантаження...</p>}
      {error && <p>Помилка: {error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
