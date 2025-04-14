import BookList from "./bookList/BookList";
import Header from "./components/header/Header";
import NewBookForm from "./components/newBookForm/NewBookForm";
const App = () => {
  return (
    <>
      <Header />
      <NewBookForm/>
      <BookList />
    </>
  );
};

export default App;
