import Button from "./Button";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { setShow, setRole } from "../rtk/slices/addUpdateSlice";
import { motion } from "framer-motion";

const Header = () => {
  const { role } = useSelector((addUpdateSlice) => addUpdateSlice);
  const dispatch = useDispatch();
  return (
    <>
      <div className="bg-white shadow-lg py-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container flex items-center gap-2 flex-wrap"
        >
          <SearchBar />
          <div className="max-sm:w-full">
            <Button
              role="add"
              style={"w-full"}
              event={() => {
                role !== "add" && dispatch(setRole("add"));
                dispatch(setShow());
              }}
            >
              <span className="mr-1">+</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Header;
