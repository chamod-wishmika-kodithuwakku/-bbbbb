import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  users: [
    {
      id: 1,
      name: "User One",
      email: "userone@gmail.com",
      phone: "123-456-7890",
    },
    {
      id: 2,
      name: "User Two",
      email: "usertwo@gmail.com",
      phone: "234-567-8901",
    },
    {
      id: 3,
      name: "User Three",
      email: "userthree@gmail.com",
      phone: "345-678-9012",
    },
  ],
  books: [
    {
      id: 4,
      title: "Book One",
      author: "Author One",
      publicationDate: "2022-01-01",
      availableCopies: 5,
    },
    {
      id: 5,
      title: "Book Two",
      author: "Author Two",
      publicationDate: "2022-02-01",
      availableCopies: 3,
    },
    {
      id: 6,
      title: "Book Three",
      author: "Author Three",
      publicationDate: "2022-03-01",
      availableCopies: 2,
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  // Actions for books
  const removeBook = (id) => {
    dispatch({
      type: "REMOVE_BOOK",
      payload: id,
    });
  };

  const addBook = (book) => {
    dispatch({
      type: "ADD_BOOK",
      payload: book,
    });
  };

  const editBook = (book) => {
    dispatch({
      type: "EDIT_BOOK",
      payload: book,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        addUser,
        editUser,
        books: state.books,
        removeBook,
        addBook,
        editBook,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
