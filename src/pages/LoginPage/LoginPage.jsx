import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={css.container}>
      <h2>Вхід</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
