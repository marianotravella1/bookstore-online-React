import BookList from "./bookList/BookList";
import Header from "./components/header/Header";
import NewBookForm from "./components/newBookForm/NewBookForm";
import { books } from "./data/books";
const App = () => {
  return (
    <>
      <Header />
      <NewBookForm/>
      <BookList books={books} />
    </>
  );
};

export default App;
