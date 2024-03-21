import { RiDeleteBin6Fill } from "react-icons/ri";
import NotesCategory from "./NotesCategory";
import { MdModeEdit } from "react-icons/md";
import { completeNote } from "../rtk/slices/notesSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setRole,
  setId as setUpdateId,
  setShow as showUpdateForm,
} from "../rtk/slices/addUpdateSlice";
import {
  setID as setDeleteID,
  setShow as showDeleteForm,
} from "../rtk/slices/deleteSlice";
const NotesCard = ({ title, desc, category, completed, time }) => {
  const { role } = useSelector(({ addUpdateSlice }) => addUpdateSlice);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        completed && "bg-opacity-[24%]"
      } bg-white p-5 shadow-lg rounded-lg flex flex-col transition`}
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
              dispatch(showDeleteForm());
              dispatch(setDeleteID(time));
            }}
          >
            <RiDeleteBin6Fill />
          </div>
          <div
            className="tools"
            onClick={() => {
              role !== "update" && dispatch(setRole("update"));
              dispatch(setUpdateId(time));
              dispatch(showUpdateForm());
            }}
          >
            <MdModeEdit />
          </div>
        </div>
      </div>
      <div className="flex-grow-[1]">
        <h2
          className={`mt-5 text-gray-900 transition break-words ${
            completed && "line-through text-opacity-[36%]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`mt-3 text-gray-900 transition break-words ${
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
  );
};

export default NotesCard;
