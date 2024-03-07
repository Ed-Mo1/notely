import { useSelector } from "react-redux";
import Layout from "./common/Layout";
import { All, Business, Home, Personal } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
const router = createBrowserRouter([
  {
    path: "/notely",
    element: <Layout />,
    children: [
      { index: true, element: <All /> },
      { path: "home", element: <Home /> },
      { path: "personal", element: <Personal /> },
      { path: "business", element: <Business /> },
    ],
  },
]);
const App = () => {
  const data = useSelector(({ notes }) => notes);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);
  return <RouterProvider router={router} />;
};

export default App;
