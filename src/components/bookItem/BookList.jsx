import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BookItem from "./BookItem";

const BookList = ({ books }) => {
  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Lista de Libros</h1>
      <Row className="g-4">
        {books.map((book) => (
          <Col key={book.id} xs={12} md={4}>
            <BookItem {...book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
