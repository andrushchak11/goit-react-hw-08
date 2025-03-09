import styles from "./SearchBox.module.css";

function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchBox}>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}

export default SearchBox;
