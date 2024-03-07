import React from "react";

import { useField } from "formik";
const SelectFeild = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <fieldset className="flex-1">
      <label htmlFor={field.name}>{label}</label>
      <select 
      id={field.name}
        {...field}
        {...props}
        className={`block bg-[#EEEEEE] py-2 px-5 rounded w-full focus:outline-none border-2`}
      >
        <option value="personal" >
          Personal
        </option>
        <option value="business" >Business</option>
        <option value="home">Home</option>
      </select>
    </fieldset>
  );
};

export default SelectFeild;
