import React ,{useState, useContext}from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import { v4 as uuid} from 'uuid';

export const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const { addUser } = useContext(GlobalContext);
  const navigateTo = useNavigate();

  const onSubmit = () =>{
    const newUser = {
      id:uuid(),
      name,
      email,
      phone
    };
    addUser(newUser);
    navigateTo('/homeusers');
  };

  const onChange = (e) =>{
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text"  value={name} onChange={onChange} name="name" placeholder="Enter name" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email"  value={email} onChange={onChange} name="email" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label>Phone</Label>
        <Input type="tel"  value={phone} onChange={onChange} name="phone" placeholder="Enter phone" />
      </FormGroup>
    
      <Button color="primary" type="submit" style={{ marginRight: "10px" }}>
        Add User
      </Button>
    
      <Link to="/homeusers" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
};
