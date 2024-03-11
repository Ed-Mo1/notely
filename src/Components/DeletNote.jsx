import ReactDom from "react-dom";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../rtk/slices/deleteSlice";
import { removeNote } from "../rtk/slices/notesSlice";

const DeletNote = () => {
  const { item } = useSelector((state) => state.deleteNote);
  const dispatch = useDispatch();
  return ReactDom.createPortal(
    <div className="bg-white shadow-2xl p-5 w-full max-w-[95%] sm:max-w-[600px] z-40 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-between items-center mb-5">
        <h2>Delete note</h2>
        <IoMdClose
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(setShow())}
        />
      </div>
      <p className="text-gray-900">
        Are you sure you want to delete this note?
      </p>
      <div className="flex justify-end gap-5 mt-5">
        <Button event={() => dispatch(setShow())} />
        <Button
          role="del"
          event={() => {
            dispatch(setShow());
            dispatch(removeNote(item));
          }}
        />
      </div>
    </div>,
    document.getElementById("delete-module")
  );
};

export default DeletNote;
