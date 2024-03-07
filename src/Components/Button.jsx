const Button = ({ role, event, children, type }) => {
  return (
    <button
      type={type}
      onClick={event}
      className={`flex hover:opacity-[0.8] transition items-center gap-2 py-2 px-3 rounded-full ${
        role == "add" || role == "update"
          ? "bg-blue-400 text-white "
          : role == "del"
          ? "bg-red-400 text-white"
          : "bg-transparent"
      }`}
    >
      {children}
      {role == "add"
        ? "Add"
        : role == "update"
        ? "Update"
        : role == "del"
        ? "Delete"
        : "Cancel"}
    </button>
  );
};

export default Button;
