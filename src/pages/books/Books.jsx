import React, { Suspense } from "react";
import Book from "../book/Book";

function Books({allBooks}) {
//   const [allBooks, setAllBooks] = useState([]);

//   useEffect(() => {
//     fetch("booksData.json")
//       .then((res) => res.json())
//       .then((data) => console.log(data));
//   });

  return <div className="text-3xl text-center p-6">books
    <Suspense fallback={<span>Loading ....</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
            allBooks.map(book => <Book book={book} key={book.bookId}/>)
        }
        </div>
    </Suspense>
  </div>;
}

export default Books;
