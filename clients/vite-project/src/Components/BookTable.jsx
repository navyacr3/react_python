import { useEffect, useState } from "react";
import axios from "axios";
function BookTable() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    console.log("fw");
    const url = "http://127.0.0.1:8000/api/books/";
    axios.get(url).then((data) => {
      console.log(data);
    });
  }, []);
}
export default BookTable;
