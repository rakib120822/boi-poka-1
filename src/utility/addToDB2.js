import swal from "sweetalert";

const getWishListBook = () => {
  const storedBookStr = localStorage.getItem("wishList");

  if (storedBookStr) {
    const storedBookData = JSON.parse(storedBookStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB2 = (id) => {
  const storedBookData = getWishListBook();
  if (storedBookData.includes(id)) {
    swal("Warning!","Already exists","warning");
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("wishList", data);
    swal("Good job!", "Added to the wishList!", "success");
  }
};

export { addToStoredDB2, getWishListBook };
