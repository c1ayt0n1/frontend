// frontend/src/components/BookList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      const response = await axios.get("/api/books");
      setBooks(response.data);
    }
    fetchBooks();
  }, []);

  const handleCheckout = async (id) => {
    await axios.patch(`/api/books/checkout/${id}`, { checkedOutBy: "User", dueDate: new Date() });
    window.location.reload();
  };

  const handleCheckin = async (id) => {
    await axios.patch(`/api/books/checkin/${id}`);
    window.location.reload();
  };

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} - Status: {book.status}
            {book.status === "available" ? (
              <button onClick={() => handleCheckout(book._id)}>Check Out</button>
            ) : (
              <button onClick={() => handleCheckin(book._id)}>Check In</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

