// src/components/SearchBox/SearchBox.jsx
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      className={css.input}
      placeholder="Search by name..."
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
    />
  );
}
