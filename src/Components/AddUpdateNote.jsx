import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputFeild from "./InputFeild";
import SelectFeild from "./SelectFeild";
import Button from "./Button";
import Desc from "./Desc";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { setShow } from "../rtk/slices/addUpdateSlice";
import { addNote, editNote } from "../rtk/slices/notesSlice";
import { motion} from "framer-motion";
const validsationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  desc: Yup.string().max(200, "Must be 200 characters or less").optional(),
  category: Yup.string()
    .required("This field is required")
    .oneOf(["business", "personal", "home"]),
});

const AddUpdateNote = () => {
  const { role, id } = useSelector(({ addUpdateSlice }) => addUpdateSlice);
  const note = useSelector(({ notes }) => notes.find((n) => n.time === id));
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
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
        animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
        className="bg-white shadow-2xl p-5 w-full max-w-[95%] sm:max-w-[600px] z-40 rounded-lg fixed"
        exit={{ opacity: 0, scale: 0 }}
      >
        <div className="flex justify-between items-center">
          <h2 className="mb-5">Add note</h2>
          <IoMdClose
            className="text-2xl cursor-pointer"
            onClick={() => dispatch(setShow())}
          />
        </div>
        <Formik
          initialValues={{
            title: role !== "add" ? note.title : "",
            desc: role !== "add" ? note.desc : "",
            category: role !== "add" ? note.category : "business",
          }}
          validationSchema={validsationSchema}
          onSubmit={
            role == "add"
              ? (value) => {
                  dispatch(
                    addNote({ ...value, time: Date.now(), completed: false })
                  );
                  dispatch(setShow());
                }
              : (value) => {
                  dispatch(editNote({ ...value, time: id }));
                  dispatch(setShow());
                }
          }
        >
          {() => (
            <Form>
              <div className="flex gap-5">
                <InputFeild
                  label="Title"
                  name="title"
                  type="text"
                  placeholder="Add title"
                />
                <SelectFeild label="Category" name="category" type="select" />
              </div>
              <div className="mt-5">
                <Desc
                  name="desc"
                  placeholder="Add description"
                  label="Description (optional)"
                />
              </div>
              <div className="flex justify-end gap-5 items-center">
                <Button
                  type="button"
                  role="cancel"
                  event={() => dispatch(setShow())}
                />
                <Button type="submit" role={role} />
              </div>
            </Form>
          )}
        </Formik>
      </motion.div>

      <div
        onClick={() => dispatch(setShow())}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20"
      />
    </>,
    document.getElementById("form-module")
  );
};

export default AddUpdateNote;
