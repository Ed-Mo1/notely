import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import { useSelector } from "react-redux";
import AddUpdateNote from "../Components/AddUpdateNote";
import DeletNote from "../Components/DeletNote";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Layout = () => {
  const { show: showAddUpdate } = useSelector(
    ({ addUpdateSlice }) => addUpdateSlice
  );
  const { show: showDelete } = useSelector(({ deleteNote }) => deleteNote);
  useEffect(() => {
    showAddUpdate || showDelete
      ? document.body.classList.add("h-screen", "overflow-hidden")
      : document.body.classList.remove("overflow-hidden", "h-screen");
  }, [showAddUpdate, showDelete]);
  return (
    <>
      <div className="min-h-screen bg-[#EEEEEE]">
        <Header />
        <div className="container">
          <div>
            <Nav />
          </div>
          <Outlet />
        </div>
      </div>
      <AnimatePresence>
        {showAddUpdate && <AddUpdateNote />}
        {showDelete && <DeletNote />}
      </AnimatePresence>
    </>
  );
};

export default Layout;
