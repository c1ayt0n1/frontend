import React from 'react';

const CheckedOutBooks = () => {
  const books = [
    { title: 'The Fellowship of the Ring', author: 'J. R. R. Tolkien', checkedOutBy: 'John Smith', dueDate: '11-09-2024' },
    { title: 'The Alchemist', author: 'Paulo Coelho', checkedOutBy: 'Peter House', dueDate: '07-10-2024' },
  ];

  return (
    <section>
      <h2>Checked-Out Books</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Checked Out By</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.checkedOutBy}</td>
              <td>{book.dueDate}</td>
              <td>
                <button>Check In</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CheckedOutBooks;
