import React from "react";

const NotesCategory = ({ category, completed }) => {
  const styles = {
    business: " bg-deepPurple-200 text-deepPurple-900",
    personal: " bg-orange-200 text-orange-900",
    home: "bg-green-200 text-green-900",
  };
  const style = styles[category];

  return (
    <div
      className={`py-2 px-4 rounded-full transition ${
        completed
          ? "bg-gray-900 bg-opacity-[36%] text-gray-900 text-opacity-[36%]"
          : style
      }`}
    >
      {category.slice(0, 1).toUpperCase() + category.slice(1)}
    </div>
  );
};

export default NotesCategory;
