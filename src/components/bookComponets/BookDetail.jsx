import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from 'uuid';


export const BookDetail = () => {
  const [selectedBook, setSelectedBook] = useState({
    id: '',
    title: '',
    author: '',
    publicationDate: '',
    availableCopies: ''
  });

  const { books } = useContext(GlobalContext);
  const navigateTo = useNavigate();
  const { id: currentBookId } = useParams();

  useEffect(() => {
    const bookId = currentBookId;
    const selectedBook = books.find(book => book.id == bookId)
    setSelectedBook(selectedBook)
  }, [currentBookId, books])

  const onChange = (e) => {
    setSelectedBook({ ...selectedBook, [e.target.name]: e.target.value })
  }

  return (
    <Form>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="title" value={selectedBook.title} onChange={onChange} placeholder="Enter title" disabled />
      </FormGroup>

      <FormGroup>
        <Label>Author</Label>
        <Input type="text" name="author" value={selectedBook.author} onChange={onChange} placeholder="Enter author" disabled/>
      </FormGroup>
      
      <FormGroup>
        <Label>Publication Date</Label>
        <Input type="date" name="publicationDate" value={selectedBook.publicationDate} onChange={onChange} placeholder="Enter publication date" disabled />
      </FormGroup>

      <FormGroup>
        <Label>Available Copies</Label>
        <Input type="number" name="availableCopies" value={selectedBook.availableCopies} onChange={onChange} placeholder="Enter available copies" disabled />
      </FormGroup>

      <Link to="/homebooks" className="btn btn-primary mr-2">Back</Link>
    
    </Form>
  )
}
