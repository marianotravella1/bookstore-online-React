import BookItem from "./components/bookItem/BookItem";
import BookList from "./components/bookItem/bookList/BookList";
import { books } from "./data/books";
const App = () => {
  return (
    <>
      <BookList books={books}/>
    </>
  );
};

export default App;
