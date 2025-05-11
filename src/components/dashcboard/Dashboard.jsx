import { useEffect, useState } from "react";
import BookList from "../../bookList/BookList";
import Header from "../header/Header";
import NewBookForm from "../newBookForm/NewBookForm";

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks(prevBooks => [newBook, ...prevBooks])
  }

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching books");
        return res.json();
      })
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <NewBookForm onBookAdded={handleAddBook}/>
      <BookList books={books}/>
    </>
  );
}

export default Dashboard