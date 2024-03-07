import {useSelector } from "react-redux";
import { useMemo } from "react";
const useCategory = (category) => {
  const notes = useSelector((state) => state.notes);

  const filteredData = useMemo(() => {
    return category
      ? notes.filter((note) => note.category === category)
      : notes;
  }, [category, notes]);

  return filteredData;
};

export default useCategory;
