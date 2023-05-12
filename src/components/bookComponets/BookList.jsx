import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

import { GlobalContext } from '../../context/GlobalState'

export const BookList = () => {


const { books, removeBook } = useContext(GlobalContext);

return (

    <ListGroup className='mt-4'>
        {books.map(book => (
            <ListGroupItem className='d-flex' >
                <strong className='col-sm-4'>{book.title}</strong>
                <div className='d-flex' style={{ marginLeft: "50px" }}>
                    <Link to={`/bookdetail/${book.id}`} className='btn btn-primary  col-sm-5' >View</Link>
                    <Link to={`/editbook/${book.id}`} className='btn btn-warning  col-sm-5'style={{ marginLeft: "10px" }} >Edit</Link>
                    <Button onClick={() => removeBook(book.id)} color="danger" style={{ marginLeft: "10px" }}>Delete</Button>
                </div>
            </ListGroupItem>

        ))}

    </ListGroup>
)

}