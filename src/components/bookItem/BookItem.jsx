import { Card, ListGroup, Badge, Button } from "react-bootstrap";

const BookItem = ({ title, author, rating, pageCount, available, imageUrl }) => {
  return (
    <Card className="shadow-lg rounded border-0 flex" >
      {/* Imagen más pequeña */}
      <Card.Img variant="top" src={imageUrl} className="p-3 rounded" />

      {/* Cuerpo de la tarjeta */}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
      </Card.Body>

      {/* Lista de detalles */}
      <ListGroup variant="flush">
        <ListGroup.Item>
          <strong>⭐ Rating:</strong> {rating} / 5
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>📖 Páginas:</strong> {pageCount}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>📌 Estado:</strong>{" "}
          <Badge bg={available ? "success" : "danger"}>
            {available ? "Disponible" : "No disponible"}
          </Badge>
        </ListGroup.Item>
      </ListGroup>

      <Button variant="primary">Buy</Button>
    </Card>
  );
};

export default BookItem;
