import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortBooks } from "../redux/actions";

export default function BooksList() {
  const { books, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    const [criteria, order] = e.target.value.split("-");
    dispatch(sortBooks(criteria, order));
  };

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Books List</h2>
      <label>
        Sort By:
        <select onChange={handleSortChange}>
          <option value="title-asc">Title Ascending</option>
          <option value="title-desc">Title Descending</option>
          <option value="author-asc">Author Ascending</option>
          <option value="author-desc">Author Descending</option>
          <option value="publisher-asc">Publisher Ascending</option>
          <option value="publisher-desc">Publisher Descending</option>
        </select>
      </label>
      <table border="1" style={{ marginTop: "10px", width: "100%" }}>
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
