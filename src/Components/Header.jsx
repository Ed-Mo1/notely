import Button from "./Button";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { isOpen } from "../rtk/slices/openAddSlice";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white shadow-lg py-2">
        <div className="container flex items-center gap-2 flex-wrap">
          <SearchBar />
         <div className="max-sm:w-full">
         <Button role="add" style={'w-full'} event={() => dispatch(isOpen())}>
            <span className="mr-1">+</span>
          </Button>
         </div>
        </div>
      </div>
    </>
  );
};

export default Header;
