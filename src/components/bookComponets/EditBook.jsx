import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from 'uuid';


export const EditBook = () => {
  const [selectedBook, setSelectedBook] = useState({
    id: '',
    title: '',
    author: '',
    publicationDate: '',
    availableCopies: ''
  });

  const { books, editBook } = useContext(GlobalContext);
  const navigateTo = useNavigate();
  const { id: currentBookId } = useParams();

  useEffect(() => {
    const bookId = currentBookId;
    const selectedBook = books.find(book => book.id == bookId)
    setSelectedBook(selectedBook)
  }, [currentBookId, books])

  const onSubmit = () => {
    editBook(selectedBook)

    navigateTo('/homebooks')
  }

  const onChange = (e) => {
    setSelectedBook({ ...selectedBook, [e.target.name]: e.target.value })
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="title" value={selectedBook.title} onChange={onChange} placeholder="Enter title" />
      </FormGroup>

      <FormGroup>
        <Label>Author</Label>
        <Input type="text" name="author" value={selectedBook.author} onChange={onChange} placeholder="Enter author" />
      </FormGroup>

      <FormGroup>
        <Label>Publication Date</Label>
        <Input type="date" name="publicationDate" value={selectedBook.publicationDate} onChange={onChange} placeholder="Enter publication date" />
      </FormGroup>

      <FormGroup>
        <Label>Available Copies</Label>
        <Input type="number" name="availableCopies" value={selectedBook.availableCopies} onChange={onChange} placeholder="Enter available copies" />
      </FormGroup>

      <Button color="primary" type="submit" style={{ marginRight: "10px" }}>
        Edit Book
      </Button>

      <Link to="/homebooks" className="btn btn-danger ">Cancel</Link>
    </Form>
  )
}
