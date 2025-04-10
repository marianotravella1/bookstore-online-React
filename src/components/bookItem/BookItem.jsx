import React, { useState } from "react";
import "./bookItem.css";

const BookItem = ({
  title: initialTitle,
  author,
  rating,
  pageCount,
  available,
  imageUrl,
}) => {
  const [title, setTitle] = useState(initialTitle);

  const handleClick = () => {
    setTitle("Actualizado");
  };

  const availableBadge = available ? (
    <p className="text-sm text-green-700 bg-green-100 px-2 py-0.5 rounded w-fit">Available</p>
  ) : (
    <p className="text-sm text-red-700 bg-red-100 px-2 py-0.5 rounded w-fit">Not available</p>
  );

  return (
    <div className="bg-white w-full max-w-3xs m-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200 cursor-pointer">
      
      <div className="pt-1 w-full h-52 bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden shadow">
        <img
          src={imageUrl || "https://bit.ly/47NylZk"}
          alt={title}
          className="object-contain h-full"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-800 min-h-[3.5rem] line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>

        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>⭐</strong> {rating} / 5</p>
          <p><strong>📖</strong> {pageCount} pages</p>
        </div>

        {availableBadge}

        <button
          className="mt-2 bg-[#3483FA] px-3 py-2 rounded flex self-center text-sm text-white font-semibold hover:bg-[#7192c3] w-fit"
          onClick={handleClick}
        >
          Custom title
        </button>
      </div>
    </div>
  );
};

export default BookItem;
