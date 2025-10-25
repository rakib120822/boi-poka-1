import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

function Book({ book }) {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    publisher,
    yearOfPublishing,
    totalPages,
  } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 border   shadow-sm">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto ">
          <img src={image} alt="book" className="h-[166px] " />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">
              <p>{yearOfPublishing}</p>
            </div>
          </h2>
          <p>Author : {author}</p>
          <p>Published by : {publisher}</p>
          <p>Total Page : {totalPages}</p>
          
          <div className=" border-t border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge">{category}</div>
            <div className="badge">
              {rating} <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Book;
