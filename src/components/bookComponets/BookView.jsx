import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

import { GlobalContext } from '../../context/GlobalState'


export const BookView = () => {

    const { books } = useContext(GlobalContext);

    return (

        <ListGroup className='mt-4'>
            {books.map(book => (
                <ListGroupItem className='d-flex' >
                    <strong className='col-sm-6'>{book.title}</strong>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
