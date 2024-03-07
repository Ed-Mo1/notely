import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { useSelector } from "react-redux";
import AddNote from "../Components/AddNote";
import DeletNote from "../Components/DeletNote";

const Layout = () => {
  const showAdd = useSelector(({ addNote }) => addNote);
  const { show } = useSelector(({ deleteNote }) => deleteNote);

  return (
    <>
      <div className="min-h-screen bg-[#EEEEEE]">
        <Header />
        <div className="container ">
          <div>
            <Nav />
          </div>
          <Outlet />
        </div>
      </div>
      {showAdd && <AddNote />}
      {showAdd && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20" />
      )}
      {show && <DeletNote />}
      {show && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20" />
      )}
    </>
  );
};

export default Layout;
