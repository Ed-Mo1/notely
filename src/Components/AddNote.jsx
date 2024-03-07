import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputFeild from "./InputFeild";
import SelectFeild from "./SelectFeild";
import Button from "./Button";
import Desc from "./Desc";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { isOpen } from "../rtk/slices/openAddSlice";
import { IoMdClose } from "react-icons/io";
import { addNote } from "../rtk/slices/notesSlice";

const validsationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  desc: Yup.string().max(200, "Must be 200 characters or less").optional(),
  category: Yup.string()
    .required("This field is required")
    .oneOf(["business", "personal", "home"]),
});

const AddNote = () => {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div className="bg-white shadow-2xl p-5 w-full max-w-[95%] sm:max-w-[600px] z-40 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-between items-center">
        <h2 className="mb-5">Add note</h2>
        <IoMdClose
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(isOpen())}
        />
      </div>
      <Formik
        initialValues={{
          title: "",
          desc: "",
          category: "business",
        }}
        validationSchema={validsationSchema}
        onSubmit={async (value) => {
          dispatch(addNote({ ...value, time: Date.now(), completed: false }));
          dispatch(isOpen());
        }}
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
                event={() => dispatch(isOpen())}
              />
              <Button type="submit" role="add" />
            </div>
          </Form>
        )}
      </Formik>
    </div>,
    document.getElementById("form-module")
  );
};

export default AddNote;
