import useCategory from "../hooks/categoryHook";
import NotesList from "../Components/NotesList";

const Personal = () => {
  const data = useCategory("personal");
  return <NotesList notes={data} />;
};

export default Personal;
