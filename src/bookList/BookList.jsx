import React from "react";
import './bookList.css';
import BookItem from "../components/bookItem/BookItem";

const BookList = ({ books }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      title={book.title}
      author={book.author}
      rating={book.rating}
      pageCount={book.pageCount}
      imageUrl={book.imageUrl}
      available={book.available}
    />
  ));

  return <div className="flex flex-wrap">{booksMapped}</div>;
};

export default BookList;
