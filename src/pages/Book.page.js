import { useParams } from "react-router-dom";
import Book from "../components/Book";

function BookPage() {
  const { id } = useParams();

  return <Book id={id} withCharacter />;
}

export default BookPage;
