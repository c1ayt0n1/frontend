import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AvailableBooks from './AvailableBooks';
import CheckedOutBooks from './CheckedOutBooks';
import AddBook from './AddBook';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Library Books</h1>
        <nav>
          <Link to="/">Available Books</Link>
          <Link to="/checked-out">Checked-Out Books</Link>
          <Link to="/add-book">Add Book</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AvailableBooks />} />
          <Route path="/checked-out" element={<CheckedOutBooks />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
