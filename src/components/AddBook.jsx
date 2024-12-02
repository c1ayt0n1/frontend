import React, { useState } from 'react';

const AddBook = () => {
  const [book, setBook] = useState({ title: '', author: '', publisher: '', isbn: '' });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Book Added: ${JSON.stringify(book)}`);
  };

  return (
    <section>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={book.title} onChange={handleChange} />
        <input name="author" placeholder="Author" value={book.author} onChange={handleChange} />
        <input name="publisher" placeholder="Publisher" value={book.publisher} onChange={handleChange} />
        <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </section>
  );
};

export default AddBook;
