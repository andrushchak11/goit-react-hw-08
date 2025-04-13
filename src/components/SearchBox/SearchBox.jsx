import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux//filters/slice";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";

function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <input
        type="text"
        value={filter}
        placeholder="Search..."
        className={css.input}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
