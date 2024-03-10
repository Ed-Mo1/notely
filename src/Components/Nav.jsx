import { NavLink } from "react-router-dom";
import { navLinks } from "../constant";
import { showCompleted } from "../rtk/slices/completedNotesSlice";
import { useDispatch } from "react-redux";
const Nav = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-8">
      <h2>Your notes</h2>
      <div className="flex mt-10  gap-8 justify-between items-center flex-wrap">
        <ul className="flex w-fit">
          {navLinks.map(({ id, name, to }) => (
            <NavLink
              key={id}
              to={to}
              end={true}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-blue-400 before:bg-blue-400 hover:text-opacity-[60%] before:h-[3px] before:bottom-[-1%] hover:before:bg-opacity-[60%] before:rounded-full"
                    : "text-gray-900 text-opacity-[60%] before:bg-black before:bg-opacity-[12%] before:h-[2px]"
                } max-sm:text-sm max-md:px-3 px-8 pb-4 relative  transition before:absolute before:left-0 before:bottom-0 before:w-full`
              }
            >
              {name}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center w-fit ms-auto gap-2">
          <div className="tools ">
            <input
              type="checkbox"
              className={`accent-gray-900/[36%] w-[18px] h-[18px] cursor-pointer`}
              onChange={() => dispatch(showCompleted())}
            />
          </div>
          <p>Show only completed notes</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
