import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

import { GlobalContext } from '../../context/GlobalState'


export const UserView = () => {

    const { users, removeUser } = useContext(GlobalContext);

    return (

        <ListGroup className='mt-4'>
            {users.map(user => (
                <ListGroupItem className='d-flex' >
                    <strong className='col-sm-6'>{user.name}</strong>
                  
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}
