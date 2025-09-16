import React, { useState } from "react";

const dummyBooks = [
  { title: "A Tale of Two Cities", author: "Charles Dickens", publisher: "Penguin", isbn: "123" },
  { title: "Moby Dick", author: "Herman Melville", publisher: "HarperCollins", isbn: "456" },
  { title: "Pride and Prejudice", author: "Jane Austen", publisher: "Oxford", isbn: "789" },
];

export default function BooksList() {
  const [books, setBooks] = useState(dummyBooks);
  const [sortField, setSortField] = useState("title");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSortChange = (e, type) => {
    const value = e.target.value;
    if (type === "field") setSortField(value);
    if (type === "order") setSortOrder(value);

    const sorted = [...books].sort((a, b) => {
      if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
    setBooks(sorted);
  };

  return (
    <div className="sort-books">
      <label>
        Sort By:
        <select onChange={(e) => handleSortChange(e, "field")}>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publisher">Publisher</option>
        </select>
      </label>
      <label>
        Order:
        <select onChange={(e) => handleSortChange(e, "order")}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>

      <table className="books-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b, i) => (
            <tr key={i}>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.publisher}</td>
              <td>{b.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
