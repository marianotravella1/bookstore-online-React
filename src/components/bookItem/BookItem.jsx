const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  available,
  imageUrl,
}) => {
  return (
    <div className="shadow-lg m-4 p-3 d-flex align-items-center" bg="light">
      <img src={imageUrl !== "" ? imageUrl : "https:/bit.ly/47NylZk"} />

      <div>
        <div className="mb-2">
          {available ? (
            <p bg="success">Available</p>
          ) : (
            <p bg="danger">Unavailable</p>
          )}
        </div>
        <h3 className="fw-bold">{title}</h3>
        <p className="text-muted">{author}</p>

        <div variant="flush">
          <>
            <strong>⭐ Rating:</strong> {rating} / 5
          </>
          <>
            <strong>📖 Páginas:</strong> {pageCount}
          </>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
