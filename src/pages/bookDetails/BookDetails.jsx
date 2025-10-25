import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import { addToStoredDB2 } from "../../utility/addToDB2";

function BookDetails() {
  const { id } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === Number(id));
  const {
    bookName,
    image,
    yearOfPublishing,
    author,
    publisher,
    category,
    rating,
    tags,
  } = book;

  const handleMarkAsRead = id => {
        addToStoredDB(id);
        
  }

  const handleMarkAsWishList = id =>{
    addToStoredDB2(id);
    
  }

  return (
    <div className="card bg-base-100 border max-w-2/3 flex-row gap-10  shadow-sm my-[100px]">
      <figure className="p-4 bg-gray-100 max-w-1/2">
        <img src={image} alt="book" className="w-full " />
      </figure>
      <div className="flex flex-col gap-10 py-10">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">
            <p>{yearOfPublishing}</p>
          </div>
        </h2>
        <p>Author : {author}</p>
        <p>Published by : {publisher}</p>
        <div className="border-t border-dashed"></div>
        <div className="">
          <h1>Review</h1>
        </div>
        <div className=" border-t border-dashed"></div>
        <div className="flex justify-between items-center">
          <span>Tag</span>{" "}
          <div className="flex gap-4 ">
            {tags.map((tag,index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="card-actions justify-start">
          <div className="badge">{category}</div>
          <div className="badge">
            {rating} <FaRegStarHalfStroke />
          </div>
        </div>

        <div className="flex gap-5">
          <button className="btn btn-soft outline btn-accent" onClick={()=> handleMarkAsRead(id)} >Mark as Read</button>
          <button className="btn  btn-info" onClick={()=> handleMarkAsWishList(id)} >Add To Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
