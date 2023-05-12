import React from "react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { HomeUsers } from "./components/userComponents/HomeUsers";
import { AddUser } from "./components/userComponents/AddUser";
import { EditUser } from "./components/userComponents/EditUser";
import { GlobalProvider } from "./context/GlobalState";
import { Home } from "./components/Home";
import {UserDetail} from"./components/userComponents/UserDetailNew";
import Headerbar from "./components/HeaderBar/HeaderBar";
import { HomeBooks } from "./components/bookComponets/HomeBooks";
import {AddBook} from "./components/bookComponets/AddBook"
import {EditBook} from "./components/bookComponets/EditBook"
import {BookDetail} from "./components/bookComponets/BookDetail"


function App() {


  return (

    <GlobalProvider>
      <Router>
      <Headerbar/>

    <div style={{maxWidth:"30rem",margin:"4rem auto"}}> 

      <Routes>
        <Route path="/" element ={<Home/>}></Route>
        <Route path="/homeusers" element ={<HomeUsers/>}/>      
        <Route path="/add" element ={<AddUser/>}/>   
        <Route path="/edit/:id" element ={<EditUser/>}/> 
        <Route path="/userdetail/:id" element ={<UserDetail/>}></Route>

        <Route path="/homebooks" element ={<HomeBooks/>}/>   
        <Route path="/addbook" element ={<AddBook/>}/>   
        <Route path="/editbook/:id" element ={<EditBook/>}/> 
        <Route path="/bookdetail/:id" element ={<BookDetail/>}></Route>

 
      </Routes>
    </div>
    </Router>
 </GlobalProvider>
   
  )
}

export default App
