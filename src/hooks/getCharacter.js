import { useQuery } from "react-query";

const fetchCharacter = async ({ id }) => {
  const res = await fetch(`https://anapioficeandfire.com/api/characters/${id}`);
  return res.json();
};

const useGetCharacter = ({ id }) => {
  return useQuery(["character", id], () => fetchCharacter({ id }));
};

export default useGetCharacter;
