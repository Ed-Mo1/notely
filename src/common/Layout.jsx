import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { useSelector } from "react-redux";
import AddNote from "../Components/AddNote";
import DeletNote from "../Components/DeletNote";
import { useEffect } from "react";
import UpdateNote from "../Components/UpdateNote";

const Layout = () => {
  const showUpdate = useSelector(({ updateNote }) => updateNote.isOpen);
  const timeData = useSelector(({ updateNote }) => updateNote.time);
  const showAdd = useSelector(({ addNote }) => addNote);
  const { show } = useSelector(({ deleteNote }) => deleteNote);
  useEffect(() => {
    showAdd || showUpdate || show
      ? document.body.classList.add("h-screen", "overflow-hidden")
      : document.body.classList.remove("overflow-hidden",'h-screen');
  }, [showAdd, showUpdate, show]);
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

      {show && <DeletNote />}

      {showUpdate && <UpdateNote time={timeData} />}

      {(showUpdate || showAdd || show) && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20" />
      )}
    </>
  );
};

export default Layout;
