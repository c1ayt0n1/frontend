// frontend/src/components/CheckedOutBooks.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function CheckedOutBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchCheckedOutBooks() {
      const response = await axios.get("/api/books/checkedout");
      setBooks(response.data);
    }
    fetchCheckedOutBooks();
  }, []);

  return (
    <div>
      <h2>Checked-Out Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} - Due on {new Date(book.dueDate).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckedOutBooks;
