import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./InputFeild";
import SelectField from "./SelectFeild";
import Button from "./Button";
import Desc from "./Desc";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { isOpen } from "../rtk/slices/openUpdateSlice";
import { IoMdClose } from "react-icons/io";
import { editNote } from "../rtk/slices/notesSlice";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("This field is required"),
  desc: Yup.string().max(200, "Must be 200 characters or less").optional(),
  category: Yup.string()
    .required("This field is required")
    .oneOf(["business", "personal", "home"]),
});

const UpdateNote = ({ time }) => {
  const note = useSelector(({ notes }) =>
    notes.find((note) => note.time === time)
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(isOpen());
  };

  return ReactDOM.createPortal(
    <div className="bg-white shadow-2xl p-5 w-full max-w-[95%] sm:max-w-[600px] z-40 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-between items-center">
        <h2 className="mb-5">Update note</h2>
        <IoMdClose className="text-2xl cursor-pointer" onClick={handleClose} />
      </div>
      <Formik
        initialValues={{
          title: note.title,
          desc: note.desc,
          category: note.category,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log({ ...note, ...values });
          dispatch(editNote({ ...note, ...values }));
          dispatch(isOpen());
        }}
      >
        {() => (
          <Form>
            <div className="flex gap-5">
              <InputField
                label="Title"
                name="title"
                type="text"
                placeholder="Add title"
              />
              <SelectField label="Category" name="category" type="select" />
            </div>
            <div className="mt-5">
              <Desc
                name="desc"
                placeholder="Add description"
                label="Description (optional)"
              />
            </div>
            <div className="flex justify-end gap-5 items-center">
              <Button type="button" role="cancel" event={handleClose} />
              <Button type="submit" role="update" />
            </div>
          </Form>
        )}
      </Formik>
    </div>,
    document.getElementById("update-form")
  );
};

export default UpdateNote;
