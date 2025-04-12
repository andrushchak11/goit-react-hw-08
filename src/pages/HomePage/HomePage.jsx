import css from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={css.container}>
      <h1>Ласкаво просимо до Книги контактів</h1>
      <p>Зареєструйтесь або увійдіть, щоб керувати своїми контактами.</p>
    </div>
  );
}

export default HomePage;
