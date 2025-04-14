import { useState } from "react";

const NewBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [available, setAvailable] = useState(false);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleChangeRating = (event) => {
    setRating(event.target.value);
  };

  const handleChangePageCount = (event) => {
    setPageCount(event.target.value);
  };

  const handleChangeImageUrl = (event) => {
    setImageUrl(event.target.value);
  };

  const handleChangeAvailability = (event) => {
    setAvailable(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      rating: parseFloat(rating),
      pageCount: parseInt(pageCount),
      imageUrl,
      available,
    };

    try {
      const response = await fetch("http://localhost:8080/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error("Error creating the book");
      }

      const createdBook = await response.json();

      console.log("Libro creado: ", newBook);

      setTitle("");
      setAuthor("");
      setRating("");
      setPageCount("");
      setImageUrl("");
      setAvailable(false);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mt-3 mx-auto p-6 bg-white rounded-lg shadow space-y-5"
    >
      <h2 className="text-xl font-bold text-gray-800">Add Book</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          onChange={handleChangeTitle}
          value={title}
          required
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          name="author"
          onChange={handleChangeAuthor}
          value={author}
          required
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            onChange={handleChangeRating}
            value={rating}
            min="0"
            max="5"
            step="0.1"
            required
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">
            Page Count
          </label>
          <input
            type="number"
            name="pageCount"
            onChange={handleChangePageCount}
            value={pageCount}
            required
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          name="imageUrl"
          onChange={handleChangeImageUrl}
          value={imageUrl}
          className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          name="available"
          onChange={handleChangeAvailability}
          checked={available}
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label className="ml-2 block text-sm text-gray-700">Available</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Add Book
      </button>
    </form>
  );
};

export default NewBookForm;
