import { useQuery } from "react-query";

const fetchBook = async ({ id }) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/books/${id}`);
  return res.json();
};

const useGetBooks = ({ id }) => {
  return useQuery(["book", id], () => fetchBook({ id }));
};

export default useGetBooks;
