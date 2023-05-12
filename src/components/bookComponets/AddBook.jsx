import React, { useState, useContext } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from "uuid";

export const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [availableCopies, setAvailableCopies] = useState("");

  const { addBook } = useContext(GlobalContext);
  const navigateTo = useNavigate();
 
  const onSubmit = () => {
    const newBook = {
      id: uuid(),
      title,
      author,
      publicationDate,
      availableCopies: parseInt(availableCopies),
    };
    addBook(newBook);
    navigateTo("/homebooks");
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      case "publicationDate":
        setPublicationDate(e.target.value);
        break;
      case "availableCopies":
        setAvailableCopies(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input
          type="text"
          value={title}
          onChange={onChange}
          name="title"
          placeholder="Enter title"
        />
      </FormGroup>
      <FormGroup>
        <Label>Author</Label>
        <Input
          type="text"
          value={author}
          onChange={onChange}
          name="author"
          placeholder="Enter author"
        />
      </FormGroup>
      <FormGroup>
        <Label>Publication Date</Label>
        <Input
          type="date"
          value={publicationDate}
          onChange={onChange}
          name="publicationDate"
          placeholder="Enter publication date"
        />
      </FormGroup>
      <FormGroup>
        <Label>Available Copies</Label>
        <Input
          type="number"
          value={availableCopies}
          onChange={onChange}
          name="availableCopies"
          placeholder="Enter available copies"
        />
      </FormGroup>

      <Button color="primary" type="submit" style={{ marginRight: "10px" }}>
        Add Book
      </Button>

      <Link to="/homebooks" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
