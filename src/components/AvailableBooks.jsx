import React, { useState } from 'react';

const AvailableBooks = () => {
  const [books, setBooks] = useState([
    { title: 'The Fellowship of the Ring', author: 'J. R. R. Tolkien', publisher: 'HarperCollins', isbn: '9780547928210' },
    { title: 'The Alchemist', author: 'Paulo Coelho', publisher: 'HarperCollins', isbn: '9780062315007' },
  ]);

  const handleCheckOut = (isbn) => {
    alert(`Book with ISBN: ${isbn} checked out.`);
  };

  return (
    <section>
      <h2>Available Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.isbn}</td>
              <td>
                <button onClick={() => handleCheckOut(book.isbn)}>Check Out</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AvailableBooks;
