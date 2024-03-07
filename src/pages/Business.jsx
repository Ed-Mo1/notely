import useCategory from '../hooks/categoryHook';
import NotesList from '../Components/NotesList';

const Business = () => {
  const data = useCategory('business');
  
  return <NotesList notes={data} />;

}

export default Business