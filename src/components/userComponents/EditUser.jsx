import React, { useState, useContext, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid } from 'uuid';


export const EditUser = () => {
  const [selectedUser, setselectedUser] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  });

  const { users, editUser } = useContext(GlobalContext);
  const navigateTo = useNavigate();
  const { id: currentUserId } = useParams();

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find(user => user.id == userId)
    setselectedUser(selectedUser)
  }, [currentUserId, users])

  const onSubmit = () => {
    editUser(selectedUser)

    navigateTo('/homeusers')
  }

  const onChange = (e) => {
    setselectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" value={selectedUser.name} onChange={onChange} placeholder="Enter name" />
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" value={selectedUser.email} onChange={onChange} placeholder="Enter email" />
      </FormGroup>

      <FormGroup>
        <Label>Phone Number</Label>
        <Input type="tel" name="phone" value={selectedUser.phone} onChange={onChange} placeholder="Enter phone number" />
      </FormGroup>

      <Button color="primary" type="submit" style={{ marginRight: "10px" }}>
        Edit User
      </Button>

      <Link to="/homeusers" className="btn btn-danger ">Cancel</Link>
    </Form>
  )
}
