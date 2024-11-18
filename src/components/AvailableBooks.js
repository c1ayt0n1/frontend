// frontend/src/components/AvailableBooks.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function AvailableBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchAvailableBooks() {
      const response = await axios.get("/api/books/available");
      setBooks(response.data);
    }
    fetchAvailableBooks();
  }, []);

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableBooks;
