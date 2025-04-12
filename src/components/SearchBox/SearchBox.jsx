import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux//filters/slice";
import css from "./SearchBox.module.css";

function SearchBox() {
  const dispatch = useDispatch();

  return (
    <div className={css.searchBox}>
      <input
        type="text"
        placeholder="Search..."
        className={css.input}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}

export default SearchBox;
