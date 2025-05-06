import { useEffect, useState } from "react";
import BookList from "./bookList/BookList";
import Header from "./components/header/Header";
import NewBookForm from "./components/newBookForm/NewBookForm";
const App = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/books")
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
      <NewBookForm setBooks={setBooks}/>
      <BookList books={books}/>
    </>
  );
};

export default App;
