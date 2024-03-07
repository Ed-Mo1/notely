import { useField } from "formik";
const InputFeild = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <fieldset className="flex-1">
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`block bg-[#EEEEEE] py-2 border-2 px-5 rounded w-full ${
          field.value && !meta.error ? "border-blue-400" : ""
        }  ${meta.touched && meta.error ? "border-red-600" : ""}`}
      />
      <div className="h-[20px]">
        {meta.touched && meta.error ? (
          <div className="text-red-600 text-sm">{meta.error}</div>
        ) : null}
      </div>
    </fieldset>
  );
};

export default InputFeild;
