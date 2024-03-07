import { RiDeleteBin6Fill } from "react-icons/ri";
import NotesCategory from "./NotesCategory";
import { MdModeEdit } from "react-icons/md";
import { completeNote, removeNote } from "../rtk/slices/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import { isOpen, setTime } from "../rtk/slices/openUpdateSlice";
import { setDelete, setShow } from "../rtk/slices/deleteSlice";
import UpdateNote from "./UpdateNote";
const NotesCard = ({ title, desc, category, completed, time }) => {
  const open = useSelector(({ updateNote }) => updateNote.isOpen);
  const timeData = useSelector(({ updateNote }) => updateNote.time);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`${
          completed && "bg-opacity-[24%]"
        } bg-white p-5 shadow-lg rounded-lg flex flex-col justify-between transition`}
      >
        <div className="flex justify-between items-center">
          <NotesCategory category={category} completed={completed} />
          <div className="flex  items-center">
            <div className="tools">
              <input
                type="checkbox"
                checked={completed}
                className={`accent-gray-900/[36%] w-[18px] h-[18px] cursor-pointer`}
                onChange={() => {
                  dispatch(completeNote(time));
                }}
              />
            </div>
            <div
              className="tools"
              onClick={() => {
                dispatch(setShow());
                dispatch(setDelete(time));
              }}
            >
              <RiDeleteBin6Fill />
            </div>
            <div
              className="tools"
              onClick={() => {
                dispatch(setTime(time));
                dispatch(isOpen());
              }}
            >
              <MdModeEdit />
            </div>
          </div>
        </div>
        <div>
          <h2
            className={`mt-5 text-gray-900 transition ${
              completed && "line-through text-opacity-[36%]"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-3 text-gray-900 transition ${
              completed && "line-through text-opacity-[36%]"
            }`}
          >
            {desc}
          </p>
        </div>
        <div
          className={`pt-12 self-end text-gray-900 ${
            completed && "text-opacity-[36%]"
          }`}
        >
          {new Date(time).getDate()}.{new Date(time).getMonth() + 1}.
          {new Date(time).getFullYear()}
        </div>
      </div>
      {open && <UpdateNote time={timeData} />}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20" />
      )}
    </>
  );
};

export default NotesCard;
