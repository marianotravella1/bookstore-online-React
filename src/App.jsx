import BookList from "./components/bookItem/BookList";
import { books } from "./data/books";
const App = () => {
  return (
    <>
      <BookList books={books}/>
    </>
  );
};

export default App;
