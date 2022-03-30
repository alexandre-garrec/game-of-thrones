import { useQuery } from "react-query";

const fetchBooks = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books`);
  return res.json();
};

const useGetBooks = () => {
  return useQuery("books", fetchBooks);
};

export default useGetBooks;
