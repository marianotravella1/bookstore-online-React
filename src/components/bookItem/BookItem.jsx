import React, { useState } from "react";
import "./bookItem.css";
import { Star } from "lucide-react";

const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  available,
  imageUrl,
  onBookSelected,
}) => {
  const handleSelectBook = () => {
    onBookSelected(title);
  };

  const handleClick = () => {};

  const filledStars = Array.from({ length: Math.floor(rating) }, (_, i) => (
    <Star
      key={i}
      className="text-yellow-500"
      size={20}
      fill="yellow"
      onClick={handleClick}
    />
  ));
  const emptyStars = Array.from({ length: 5 - Math.floor(rating) }, (_, i) => (
    <Star key={i} className="text-gray-300" size={16} onClick={handleClick} />
  ));

  const availableBadge = available ? (
    <p className="text-sm text-green-700 bg-green-100 px-2 py-0.5 rounded w-fit">
      Available
    </p>
  ) : (
    <p className="text-sm text-red-700 bg-red-100 px-2 py-0.5 rounded w-fit">
      Not available
    </p>
  );

  return (
    <div className="bg-white w-full max-w-3xs m-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200">
      <div className="pt-1 w-full h-52 bg-gray-100 flex items-center justify-center rounded-t-xl overflow-hidden shadow">
        <img
          src={imageUrl || "https://bit.ly/47NylZk"}
          alt={title}
          className="object-contain h-full"
        />
      </div>

      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-800 min-h-[3.5rem] line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600">{author}</p>

        <div className="text-sm text-gray-700 space-y-1">
          <div className="flex items-center gap-0.5">
            {filledStars}
            {emptyStars}
          </div>
          <p>
            <strong>📖</strong> {pageCount} pages
          </p>
        </div>

        {availableBadge}

        <div className="flex justify-around">
          <button
            className="cursor-pointer mt-2 bg-[#3483FA] px-3 py-2 rounded flex self-center text-sm text-white font-semibold hover:bg-[#7192c3] w-fit"
            onClick={handleSelectBook}
          >
            Select title
          </button>
          <button className="cursor-pointer mt-2 bg-[#F3F4F6] px-3 py-2 border border-[#aaaaaa] rounded flex self-center text-sm font-semibold hover:bg-[#aaaaaa] w-fit">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
