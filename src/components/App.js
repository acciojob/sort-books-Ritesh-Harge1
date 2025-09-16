import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BooksList from "./BooksList";
import { fetchBooks } from "../redux/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Book Sorting App</h1>
      <BooksList />
    </div>
  );
}
