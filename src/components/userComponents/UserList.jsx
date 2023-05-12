import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

import { GlobalContext } from '../../context/GlobalState'

export const UserList = () => {

    const { users, removeUser } = useContext(GlobalContext);
    console.log(users);




    return (
        <ListGroup className='mt-4'>
            {users.map(user => (
                <ListGroupItem className='d-flex' >
                    <strong className='col-sm-4'>{user.name}</strong>
                    <div className='d-flex' style={{ marginLeft: "50px" }}>
                        <Link to={`/userdetail/${user.id}`} className='btn btn-primary  col-sm-5' >View</Link>
                        <Link to={`/edit/${user.id}`} className='btn btn-warning  col-sm-5' style={{ marginLeft: "10px" }} >Edit</Link>
                        <Button onClick={() => removeUser(user.id)} color="danger" style={{ marginLeft: "10px" }}>Delete</Button>
                    </div>
                </ListGroupItem>

            ))}
        </ListGroup>

    )
}
