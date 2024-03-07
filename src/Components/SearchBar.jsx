import { RiSearch2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../rtk/slices/searchedNoteSlice";
const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-[#EEEEEE] flex-grow-[1] py-2 px-5 rounded flex items-center gap-2">
      <RiSearch2Line />
      <input
        type="search"
        placeholder="Search"
        name="search"
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        className="flex-grow-[1] bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
