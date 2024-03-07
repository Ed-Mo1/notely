import Button from "./Button";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { isOpen } from "../rtk/slices/openAddSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white shadow-lg py-2">
        <div className="container flex items-center gap-2">
          <SearchBar />
          <Button role="add" event={() => dispatch(isOpen())}>
            <span>+</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
