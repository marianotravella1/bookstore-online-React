import "./bookList.css";
import BookItem from "../components/bookItem/BookItem";
import BookSearch from "../components/bookSearch/BookSearch";
import { useState } from "react";

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState("");

  const handleSelectBook = (title) => {
    setSelectedBook(title);
  };

  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      title={book.title}
      author={book.author}
      rating={book.rating}
      pageCount={book.pageCount}
      imageUrl={book.imageUrl}
      available={book.available}
      onBookSelected={handleSelectBook}
    />
  ));

  return (
    <>
      {selectedBook && (
        <p>
          Usted ha seleccionado el libro: <b>{selectedBook}</b>
        </p>
      )}
      <div className="flex flex-wrap">{booksMapped}</div>;
    </>
  );
};

export default BookList;
