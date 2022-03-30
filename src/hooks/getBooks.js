import { useQuery } from "react-query";

const fetchBooks = async () => {
  const res = await fetch("https://anapioficeandfire.com/api/books");
  return res.json();
};

const useGetBooks = () => {
  return useQuery("books", fetchBooks);
};

export default useGetBooks;
