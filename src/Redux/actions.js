export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";
export const SORT_BOOKS = "SORT_BOOKS";

export const fetchBooksRequest = () => ({ type: FETCH_BOOKS_REQUEST });
export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});
export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const sortBooks = (criteria, order) => ({
  type: SORT_BOOKS,
  payload: { criteria, order },
});

// Async action to fetch books
export const fetchBooks = () => {
  return async (dispatch) => {
    dispatch(fetchBooksRequest());
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=YOUR_API_KEY"
      );
      const data = await response.json();
      const books = data.results.books.map((b) => ({
        title: b.title,
        author: b.author,
        publisher: b.publisher,
        isbn: b.primary_isbn13,
      }));
      dispatch(fetchBooksSuccess(books));
    } catch (err) {
      dispatch(fetchBooksFailure(err.message));
    }
  };
};
