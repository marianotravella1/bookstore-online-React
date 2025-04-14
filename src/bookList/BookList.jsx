import React, { useEffect, useState } from "react";
import './bookList.css';
import BookItem from "../components/bookItem/BookItem";

const BookList = () => {

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
