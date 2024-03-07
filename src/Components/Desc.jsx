import { useField } from "formik";
const Desc = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const { error, value, touched } = meta;
  return (
    <fieldset>
      <div className="flex justify-between items-center">
        <label htmlFor="desc">{label}</label>
        {value.length}/200
      </div>
      <textarea
        {...field}
        {...props}
        placeholder="Add description"
        className={`${value && !error && "border-blue-400"} ${
          error && "border-red-600"
        } 
       w-full h-40 resize-none focus:outline-none border-2 bg-[#EEEEEE] py-2 px-5 rounded`}
      />
      <div className="h-[30px]">
        {touched && error && (
          <div className="text-red-600 text-sm">{error}</div>
        )}
      </div>
    </fieldset>
  );
};

export default Desc;
