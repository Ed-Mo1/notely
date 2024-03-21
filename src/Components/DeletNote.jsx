import ReactDom from "react-dom";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../rtk/slices/deleteSlice";
import { removeNote } from "../rtk/slices/notesSlice";
import { motion } from "framer-motion";
const DeletNote = () => {
  const { id } = useSelector((state) => state.deleteNote);
  const dispatch = useDispatch();
  return ReactDom.createPortal(
    <>
      <motion.div
        initial={{
          opacity: 0.5,
          scale: 0,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
        exit={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white shadow-2xl p-5 w-full max-w-[95%] sm:max-w-[600px] z-40 rounded-lg fixed"
      >
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
              dispatch(removeNote(id));
            }}
          />
        </div>
      </motion.div>
      <div
        onClick={() => dispatch(setShow())}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20" />
    </>,
    document.getElementById("delete-module")
  );
};

export default DeletNote;
