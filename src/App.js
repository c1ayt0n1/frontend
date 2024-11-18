// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookList from "./components/BookList";
import AvailableBooks from "./components/AvailableBooks";
import CheckedOutBooks from "./components/CheckedOutBooks";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Library Book Tracker</h1>
        
        {/* Navigation Links */}
        <nav>
          <Link to="/">All Books</Link> | 
          <Link to="/available">Available Books</Link> | 
          <Link to="/checkedout">Checked-Out Books</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/available" element={<AvailableBooks />} />
          <Route path="/checkedout" element={<CheckedOutBooks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
