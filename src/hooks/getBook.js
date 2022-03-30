import { useQuery } from "react-query";

const fetchBook = async ({ id }) => {
  const res = await fetch(`https://anapioficeandfire.com/api/books/${id}`);
  return res.json();
};

const useGetBooks = ({ id }) => {
  return useQuery(["book", id], () => fetchBook({ id }));
};

export default useGetBooks;
