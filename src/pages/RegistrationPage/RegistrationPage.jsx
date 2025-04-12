import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

function RegistrationPage() {
  return (
    <div className={css.container}>
      <h2>Реєстрація</h2>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
