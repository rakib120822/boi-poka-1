import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../book/Book";
import { getWishListBook } from "../../utility/addToDB2";

function ReadList() {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    const storedData = getStoredBook();
    const ConvertedStoredBook = storedData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      ConvertedStoredBook.includes(book.bookId)
    );

    const storedData2 = getWishListBook();
    const ConvertedWishList = storedData2.map((id) => parseInt(id));

    const myWishList = data.filter((book) =>
      ConvertedWishList.includes(book.bookId)
    );

    setWishList(myWishList);

    setReadList(myReadList);
  }, [data]);

  const handleSorting = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    } else {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
    }
  };

  return (
    <div>
      <title>BoiPoka - ReadList</title>
      <details className="dropdown my-5">
        <summary className="btn m-1">sort by : {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSorting("pages")}>pages</a>
          </li>
          <li>
            <a onClick={() => handleSorting("ratings")}>ratings</a>
          </li>
        </ul>
      </details>

      <Tabs>
        <TabList>
          <Tab>Read Book List</Tab>
          <Tab>My wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="my-10 text-3xl font-bold">
            Book i read {readList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
            {readList.map((b) => (
              <Book key={b.bookId} book={b} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="my-10 text-3xl font-bold">
            Book I will read {wishList.length}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[100px]">
            {wishList.map((b) => (
              <Book key={b.bookId} book={b} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ReadList;
