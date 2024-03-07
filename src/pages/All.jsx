import useCategory from "../hooks/categoryHook";
import NotesList from "../Components/NotesList";
const All = () => {
  const data = useCategory();
  return <NotesList notes={data} />;
};

export default All;
