import { Link } from "react-router-dom";
import useGetBooks from "../hooks/getBooks";

function ListBooks() {
  const { data, isLoading, error } = useGetBooks();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((book, index) => (
        <Link key={book.isbn} to={`book/${index + 1}`}>
          <p>{book.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default ListBooks;
