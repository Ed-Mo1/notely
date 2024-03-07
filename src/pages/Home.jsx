import NotesList from '../Components/NotesList';
import useCategory from '../hooks/categoryHook';

const Home = () => {
  const data = useCategory('home');

  return <NotesList notes={data} />;
}

export default Home