import BookList from "./bookList/BookList";
import { books } from "./data/books";
import Header from "./header/Header";
const App = () => {
  return (
    <>
      <Header />
      <BookList books={books} />
    </>
  );
};

export default App;
